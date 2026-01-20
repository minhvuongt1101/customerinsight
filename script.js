
document.addEventListener('DOMContentLoaded', () => {
    // 1. Retention Gauge
    if (document.getElementById('retentionGauge')) {
        renderRetentionGauge('retentionGauge', infographicData.part1.table1_1.retention_rate);
    }

    // 2. Generations Distribution (Horizontal Bar)
    if (document.getElementById('genDistributionChart')) {
        renderGenDistributionChart('genDistributionChart', infographicData.part2.generations);
    }

    // 3. Block Growth (Diverging Bar)
    if (document.getElementById('blockGrowthChart')) {
        renderBlockGrowthChart('blockGrowthChart', infographicData.part2.block_growth);
    }

    // 4. BCG Matrices
    if (document.getElementById('bcgChart1')) renderBCGChart('bcgChart1', infographicData.part3.bcg_matrices.tainha_office.data, 'Văn phòng Tại nhà Tỉnh / Office', infographicData.part3.bcg_matrices.tainha_office.median);
    if (document.getElementById('bcgChart2')) renderBCGChart('bcgChart2', infographicData.part3.bcg_matrices.khuvuc_tttn.data, 'Khu Vực TTTN Hà Nội', infographicData.part3.bcg_matrices.khuvuc_tttn.median);
    if (document.getElementById('bcgChart3')) renderBCGChart('bcgChart3', infographicData.part3.bcg_matrices.bvpk_office.data, 'Bệnh Viện / Phòng Khám', infographicData.part3.bcg_matrices.bvpk_office.median);
    if (document.getElementById('bcgChart4')) renderBCGChart('bcgChart4', infographicData.part3.bcg_matrices.vanphong_tn_hn.data, 'Văn Phòng TTTN Hà Nội (Detailed)', infographicData.part3.bcg_matrices.vanphong_tn_hn.median);
});

// --- CHART FUNCTIONS ---

function renderRetentionGauge(canvasId, value) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Giữ chân', 'Rời bỏ'],
            datasets: [{
                data: [value, 100 - value],
                backgroundColor: ['#0f766e', '#e2e8f0'], // Brand Teal & Gray
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            circumference: 180,
            rotation: 270,
            layout: {
                padding: { bottom: 20 }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
                title: {
                    display: true,
                    text: 'Tỷ lệ Giữ chân',
                    position: 'bottom',
                    color: '#64748b',
                    font: { size: 12, weight: 'bold' },
                    padding: { top: 10 }
                }
            }
        },
        plugins: [{
            id: 'textCenter',
            beforeDraw: function (chart) {
                var width = chart.width, height = chart.height, ctx = chart.ctx;
                ctx.restore();
                var fontSize = (height / 114).toFixed(2);
                ctx.font = "bold " + 1.25 + "em sans-serif";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#0f766e";

                var text = value + "%";
                var textX = Math.round((width - ctx.measureText(text).width) / 2);
                // Move text UP: height is bottom of canvas, so minus a larger value.
                // With 180 circumference, the arc is effectively the top half.
                // We want it roughly in the middle of that semi-circle.
                var textY = height - 40;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
}

function renderGenDistributionChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                label: 'Tỷ trọng KH (%)',
                data: data.map(d => d.share),
                backgroundColor: data.map(d => {
                    if (d.name === 'Gen Y') return '#1e3a8a'; // Navy
                    if (d.name === 'Gen Z') return '#0f766e'; // Teal
                    return '#e2e8f0'; // Gray
                }),
                barThickness: 20
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                annotation: {
                    annotations: {
                        label1: {
                            type: 'label',
                            xValue: 34,
                            yValue: 'Gen Y',
                            content: 'Trụ cột (34%)',
                            position: 'end',
                            xAdjust: 10,
                            font: { size: 11, weight: 'bold' },
                            color: '#1e3a8a'
                        }
                    }
                }
            },
            scales: {
                x: { display: false, max: 40 },
                y: { grid: { display: false } }
            }
        }
    });
}

function renderBlockGrowthChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.gen),
            datasets: [
                {
                    label: 'Tại Nhà',
                    data: data.map(d => d.home),
                    backgroundColor: '#3b82f6', // Brand Blue
                    stack: 'Stack 0'
                },
                {
                    label: 'BV/PK',
                    data: data.map(d => d.hosp),
                    backgroundColor: '#f97316', // Brand Orange
                    stack: 'Stack 1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { usePointStyle: true } }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: (ctx) => ctx.tick.value === 0 ? '#666' : '#e5e7eb', lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1 }
                }
            }
        }
    });
}

function renderBCGChart(canvasId, data, title, medianX) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Quadrant Coloring Logic
    const colors = data.map(d => {
        if (d.x >= medianX && d.y >= 0) return '#10b981'; // Green
        if (d.x >= medianX && d.y < 0) return '#f59e0b'; // Orange
        if (d.x < medianX && d.y >= 0) return '#3b82f6'; // Blue
        return '#ef4444'; // Red
    });

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: title,
                data: data,
                backgroundColor: colors,
                pointRadius: 4, // Reduce radius slightly
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: title, font: { size: 13, weight: 'bold' } },
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.raw.label + ': (KH: ' + context.raw.x.toLocaleString() + ', Growth: ' + context.raw.y.toFixed(1) + '%)';
                        }
                    }
                },
                annotation: {
                    annotations: {
                        lineX: {
                            type: 'line',
                            xMin: medianX,
                            xMax: medianX,
                            borderColor: 'rgba(0,0,0,0.2)',
                            borderWidth: 1,
                            borderDash: [5, 5],
                            label: {
                                content: 'Md: ' + (medianX > 1000 ? (medianX / 1000).toFixed(1) + 'k' : medianX),
                                enabled: true,
                                position: 'top',
                                font: { size: 10 },
                                color: '#999',
                                yAdjust: -10
                            }
                        },
                        lineY: {
                            type: 'line',
                            yMin: 0,
                            yMax: 0,
                            borderColor: 'rgba(0,0,0,0.2)',
                            borderWidth: 1,
                            borderDash: [5, 5]
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Quy mô' },
                    type: 'logarithmic',
                    ticks: {
                        callback: function (value, index, values) {
                            if (value >= 1000000) return (value / 1000000) + 'M';
                            if (value >= 1000) return (value / 1000) + 'k';
                            return value;
                        },
                        maxTicksLimit: 5
                    }
                },
                y: {
                    title: { display: true, text: 'Tăng trưởng (%)' },
                    grid: { color: (ctx) => ctx.tick.value === 0 ? '#666' : '#e5e7eb', lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1 }
                }
            }
        }
    });
}
