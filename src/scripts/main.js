AOS.init();


        // Função para converter o tempo do formato "10d 12H 20m 15s" para milissegundos
        function parseTime(timeString) {
            const timeParts = timeString.match(/(\d+)([dHms])/g);
            let totalMilliseconds = 0;

            timeParts.forEach(part => {
                const value = parseInt(part.slice(0, -1));
                const unit = part.slice(-1);

                switch (unit) {
                    case 'd':
                        totalMilliseconds += value * 24 * 60 * 60 * 1000; // dias
                        break;
                    case 'H':
                        totalMilliseconds += value * 60 * 60 * 1000; // horas
                        break;
                    case 'm':
                        totalMilliseconds += value * 60 * 1000; // minutos
                        break;
                    case 's':
                        totalMilliseconds += value * 1000; // segundos
                        break;
                }
            });

            return totalMilliseconds;
        }

        // Defina a contagem regressiva inicial
        const countdownTime = "100d 12H 20m 15s";
        let timeRemaining = parseTime(countdownTime);

        const countdownElement = document.getElementById('countdown');

        // Atualiza a contagem regressiva a cada segundo
        const interval = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(interval);
                countdownElement.innerHTML = 'Contagem regressiva finalizada!';
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}H ${minutes}m ${seconds}s`;

            // Reduz o tempo restante
            timeRemaining -= 1000; // reduz 1 segundo

        }, 1000);