function classificarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    let tipo = '';
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = 'equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipo = 'isósceles';
    } else {
        tipo = 'escaleno';
    }

    document.getElementById('resultado').textContent = `O triângulo é ${tipo}.`;

    const img = document.getElementById('trianguloImagem');
    img.style.display = 'block';

    if (tipo === 'equilátero') {
        img.src = 'data:image/png;base64,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';
        img.alt = 'Triângulo Equilátero';
    } else if (tipo === 'isósceles') {
        img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAB0dHQvLy/8/Pyrq6v5+fn19fXy8vK9vb3r6+vc3Nzu7u7i4uLDw8PZ2dmfn59ZWVmCgoLLy8ulpaW3t7d7e3uKioqQkJBEREQgICCXl5dpaWnl5eVhYWFNTU0zMzMSEhJSUlIZGRkxMTHR0dFGRkY9PT0mJiZubm6PeHIBAAAGwElEQVR4nO2da1viQAyFKa7gHRUF1BUVL6z//w/ukkFW7CmdaROSzNP3g4ur+CSUtsmcM6HX6+jo6Ojo6OhgZXCmHYE0pzfaEUhzeKUdgTT9QjsCaYpipB2CLCdF8aAdgyy3RfGhHYMsk6IohtpBiHLwL8ML7SAkOfuXYDHRjkKS41WGL9pRSHK9yrA41w5DkD+U4aF2GHIcUYJFxoXbRcgw48Jtus7wXTsQMZbrDGfagUgxWCdYPGtHIsX4K8Mi10Z/tsnwVjsUIZabDD+1Q5Fhcxpme794p9wW9PVUOxgRHii3EX291A5GhEW4Ubyu/nnSDkYEOnjX6/5ioB2NAOHtebwuTsfa4QhwSZkd9YbrY5kfV1/9/d3qwat2OAIUX2s04WCeaMfDzmhTro0ybfRv/h85evRbOyB25qu07unh7zwLN8qqTw9vQ3GjHBA359+6phN6nJtCc0hZPYZvaFFxqRsQO1vnXliRykyhef1+/RyvC7iceNy6B/7a3P3zIVw+N4LF1f9bRy70t2+BN9sJ5wBlNN98G+4dOVlrTn5mRN/npNCUqpjwrv2lFxE3k5+VKInBOSk0Bz/flEFJnKoFxM1ZeQVxmVfhdlxuJmbrVZtMuC5fV96/9RoZQL3Ej0VgyjAXheYI9YPznBr9C3RrCA1jJgrNFN3eH8vXV7/QEnDJdIlOTqcEZbTkvwAXWK+Ejr4kxYSzMwsrZri5l+S00OhnodDQafhc/v+n1f//2Xc0AgyqiuxsFJr3qvMtG4XmobLGph9koNAsKk7DXu8zk8Kt+pKZiULzZVAAnKGK3B/hionNiM+rH93tOSB2NgYFwDSLRp+SqJAoslBoTnetVmSh0HwzKACuMrhfkDJaqTLloNBQCv2qn2ag0JzX1J4kDbtWaLYMCoCJ+0a/rvQ8xv2/I7YMCgD3Cs1jzWm4VmgO9hYQOz8MCoAH541+v+Y09K/QUPjz+l9xq9CUDAoA3wpNTBPvW6EpGRQA4Th7VWjeYmqyl9UvOR2WAQwKgKDQ+LRixplmPCs0cfpZWPX3qdBEaqBPO5tky0CDAsCvQgMNCoDT2vLcKmE1NGKjYURtZxNsUAB4tWJWGBQAt5FvZ2tUGBQAXhWaWXytQtWdPytmlUEB4HMPTaVBARAafW8KTaVBAUG/W7kybpRqgwLA5R6aaoMCwKVCk9QxeFRodhgUEC8xqwG22GVQADhUaHYZFAAOFRqKOF6hHybcPW2w06CA+Ei59Fpgt0EB8JB23urzbYJCHKPUg64NxZukt6Q/Q5U6gwLA2bCMw/QqLDzFjRWzwQFxptDUGRQQtM/Uyx6aeoMCwNWUs3qDAmCc0jJrU29QQCT1W8pQrMmL2I4UmhiDAiA0XNUeOEM03GXgSKGJMSggXhq9uTUoTVCIpNkFSoGjptWJG4Wm8VSP8NI4GGfefIOvl2EZzTdpOxmWEWtQADhRaFpM0Q17aMwrNHCCQiQ+9tBEGxQADdYG9k+8QQHgYlhGvEEBcb968oI1IHYSDAqAiYNGP8GgAHAwzjzFoABwoNAkGRQAd+Yb/SSDQuXzLVsxkwwKAPvDMlovmNEfMDwsI9GgALCu0CQaFADWh2UkGhQA1seZU3jtRghQ4WZ2WEayQQFg24qZbFAA2FZodk9QiGPA8E6Xg2UVYmG4cGtgUACEt7pNhaZugkIcPK+TDEzDu+iv2LRiNjEoAOzuoWlkUADYHWfeyKAAsKvQsOl/y5ZNphiUIIeGa1WhaWhQAFgdlsHY2bHURvw0NSgA5q3bTBGiJijEYXNYRmODAsCmQsN6n6ZG35oVk3UC+bXFFTfWKfIWh2UMWdfILA7LiJ2gEAlZMW1NOYueoBCHwWEZbQwKAHsKTSuDAqLg6ab5aGdQAJhTaCo+4qE55hQa9v2D1oZltDQoIIyNM29rUAAYU2jaGhQAxsaZtzUoAIyNM5coIxeWGv32BgWAqWEZlxLLf6aGZbQ3KCDu+RZ+WiNzUTC0h4bDoAAwNCzjUKaZG3L3K81JnqAQCSk0b/x/Nx16rQUW4UPDYmBYxrnMaWhIoeExKABC4WZgWIbcp4tZGWfOZFAAGFFouAwKACPDMrgMCggbCo1kcWVjWAYFIbTJ3IRCw2dQAAwlWutUZBc2Pww0+owGBYAFhYbRoAAwoNBwGhQQktexOJiV0RL6Hzgr/RHp+sMypEd0qe+h4TUoIOglVByWIb9xV/sDZ6fiFwKR9fQEyKBQPB+I8Ub3Wz2FJiije+BVK8PxvjJUU2hme8tQS6FZ7i1DrUb/s78vDKwpdnR0dHR0dJjmL8YMQJdK41lKAAAAAElFTkSuQmCC';
        img.alt = 'Triângulo Isósceles';
    } else {
        img.src = 'data:image/jpeg;base64,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';
        img.alt = 'Triângulo Escaleno';
    }
}