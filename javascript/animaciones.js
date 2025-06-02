document.addEventListener("DOMContentLoaded", function() {
    // Animació d'entrada per a totes les seccions amb la classe fade-in
    document.querySelectorAll('.fade-in').forEach(function(el) {
        el.classList.add('show');
    });
});
document.querySelectorAll('.fade-in-up').forEach((el, i) => {
        el.style.animationDelay = (0.1 + i * 0.1) + 's';
      });

// Animación de entrada para las cards
document.querySelectorAll('.fade-in-up').forEach((el, i) => {
  el.style.animationDelay = (0.1 + i * 0.1) + 's';
});

// Gráfico de barras verticales animado tipo "Lobo de Wall Street"
const ctx = document.getElementById('solucionesChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Plataforma en la nube',
      'Comunicación digital',
      'Analítica educativa',
      'Seguridad y privacidad'
    ],
    datasets: [{
      label: 'Impacto (%)',
      data: [80, 65, 55, 70],
      backgroundColor: [
        '#0d6efd',
        '#198754',
        '#0dcaf0',
        '#dc3545'
      ],
      borderRadius: 12,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    animation: {
      duration: 1800,
      easing: 'easeOutBounce'
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: '#333'
        },
        grid: {
          color: '#e0eafc'
        }
      },
      x: {
        ticks: {
          color: '#333'
        },
        grid: {
          display: false
        }
      }
    }
  }
});