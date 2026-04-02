import Contador from './Contador'


function Projetos() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <ul>
        <li>Portfólio HTML CSS JS</li>
        <h6>
          Link GitHub:
          <a href="https://github.com/LucasBrito616/portfolio-html-css-js.git" target="_blank">
            Ver projeto
          </a>
        </h6>

      </ul>


      <br />
      <br />
      <br />
      <br />
      <br />


      <div>

        <h4>Use effect, uso do contador</h4>
        <h6><p>
          Este contador foi desenvolvido utilizando o hook useState do React,
          permitindo atualizar o valor na tela de forma dinâmica ao clicar nos botões.
        </p></h6>
        <Contador />

      </div>

    </section>
  )
}

export default Projetos