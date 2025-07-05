const spacing = 100;

function createLinesForCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const lines = [];
    const w = canvas.width;
    const h = canvas.height;

    // Vertical lines
    for (let x = 0; x < w + spacing; x += spacing) {
        const speed = 0.5 + Math.random();
        const opacity = 0.2 + Math.random() * 0.5;
        const length = 200 + Math.random() * 400;
        lines.push({x, y: -length, dx: 0, dy: speed, length, color: `rgba(192,192,192,${opacity})` });
    }

    // Horizontal lines
    for (let y = 0; y < h + spacing; y += spacing) {
        const speed = 0.5 + Math.random();
        const opacity = 0.2 + Math.random() * 0.5;
        const length = 200 + Math.random() * 400;
        lines.push({x: -length, y, dx: speed, dy: 0, length, color: `rgba(192,192,192,${opacity})` });
    }

    return { ctx, lines, w, h };
}

function resizeCanvases(canvases, contexts) {
    canvases.forEach((canvas, i) => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    });
}

function animateMultiple(canvases, contexts, allLines, intersections) {
    canvases.forEach((canvas, i) => {
        const ctx = contexts[i];
        const lines = allLines[i];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update lines
        lines.forEach(line => {
            line.x += line.dx;
            line.y += line.dy;

            if (line.dx === 0 && line.y > canvas.height + line.length) {
                line.y = -line.length;
            }
            if (line.dy === 0 && line.x > canvas.width + line.length) {
                line.x = -line.length;
            }
        });

        // Draw lines
        ctx.save();
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(200, 200, 255, 0.2)';
        lines.forEach(line => {
            ctx.strokeStyle = line.color;
            ctx.beginPath();
            if (line.dx === 0) {
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(line.x, line.y + line.length);
            } else {
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(line.x + line.length, line.y);
            }
            ctx.stroke();
        });
        ctx.restore();

        // Detect intersections
        let verticals = lines.filter(l => l.dx === 0);
        let horizontals = lines.filter(l => l.dy === 0);
        intersections[i] = [];

        verticals.forEach(v => {
            horizontals.forEach(h => {
                const vx = v.x;
                const hy = h.y;

                if (
                    vx >= h.x && vx <= h.x + h.length &&
                    hy >= v.y && hy <= v.y + v.length
                ) {
                    intersections[i].push({x: vx, y: hy, life: 30});
                }
            });
        });

        // Draw intersections
        intersections[i].forEach(point => {
            const alpha = point.life / 40;
            const size = 3 + 2 * (point.life / 30);
            ctx.fillStyle = `rgba(170, 190, 255, ${alpha})`;
            ctx.shadowColor = `rgba(170, 190, 255, ${alpha * 0.6})`;
            ctx.shadowBlur = 8 + 8 * (point.life / 30);
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fill();
            point.life--;
            if (point.life <= 0) {
                const index = intersections[i].indexOf(point);
                if (index > -1) intersections[i].splice(index, 1);
            }
        });

        ctx.shadowBlur = 0;
    });

    requestAnimationFrame(() => animateMultiple(canvases, contexts, allLines, intersections));
}

// Initialize all canvases on the page
document.addEventListener("DOMContentLoaded", () => {
    const canvases = Array.from(document.querySelectorAll('.section-canvas'));
    const contexts = [];
    const allLines = [];
    const intersections = [];

    canvases.forEach((canvas, i) => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const { ctx, lines } = createLinesForCanvas(canvas);
        contexts.push(ctx);
        allLines.push(lines);
        intersections.push([]);
    });

    window.addEventListener('resize', () => resizeCanvases(canvases, contexts));

    animateMultiple(canvases, contexts, allLines, intersections);
});