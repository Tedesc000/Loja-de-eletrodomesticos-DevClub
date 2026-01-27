window.onload = function() {
const headers = document.querySelectorAll('.header')
headers.forEach(header=>{
    header.innerHTML = `<header>
        <div class="logo">Eletrodomésticos Store</div>

        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li id="produtos">Produtos
                    <ul>
                        <li>
                            Geladeiras
                        </li>
                        <li>
                            Sanduicheiras
                        </li>
                        <li>
                            Air fryes
                        </li>
                </ul>

                </li>
                <li><a href="contatos.html">Contatos</a></li>
            </ul>
        </nav>
    </header>`
})

}