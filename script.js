const rankings = {
    pequenos: {
        labels: ['MERCADOLIBRE S.R.L.', 'TARJETA NARANJA S.A.', 'NARANJA DIGITAL', 'BANCO NACION', 'BANCO MACRO', 'BBVA ARGENTINA', 'BANCO GALICIA', 'BANCO PROVINCIA', 'SANTANDER', 'BANCO INDUSTRIAL'],
        values: [13.22, 7.70, 3.72, 3.55, 3.35, 2.70, 2.41, 2.20, 1.78, 1.62]
    },
    medianos: {
        labels: ['BANCO GALICIA', 'BANCO NACION', 'SANTANDER', 'BBVA ARGENTINA', 'BANCO MACRO', 'ICBC ARGENTINA', 'BANCO CREDICOOP', 'BANCO PROVINCIA', 'BANCO SUPERVIELLE', 'BANCO PATAGONIA'],
        values: [12.86, 10.80, 10.57, 7.13, 5.67, 4.36, 3.64, 3.60, 3.55, 2.59]
    },
    grandes: {
        labels: ['BANCO NACION', 'BANCO MACRO', 'BANCO GALICIA', 'BANCO PROVINCIA', 'SANTANDER', 'BBVA ARGENTINA', 'PROVINCIA LEASING', 'BANCO SUPERVIELLE', 'BANCO CREDICOOP', 'BANCO DEL SOL'],
        values: [20.49, 10.65, 9.34, 8.15, 4.79, 4.00, 3.78, 3.30, 3.24, 2.49]
    }
};

let myChart;
const ctx = document.getElementById('rankingChart').getContext('2d');

function initChart() {
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: rankings.pequenos.labels,
            datasets: [{
                label: 'Score Markov (%)',
                data: rankings.pequenos.values,
                backgroundColor: '#3b82f6',
                borderRadius: 8,
                indexAxis: 'y',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true, grid: { display: false } },
                y: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function updateChart(key) {
    // Actualizar Botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600');
        if(btn.innerText.toLowerCase() === key) btn.classList.add('bg-blue-600');
    });

    // Actualizar Data
    myChart.data.labels = rankings[key].labels;
    myChart.data.datasets[0].data = rankings[key].values;
    myChart.update();
}

window.onload = initChart;
