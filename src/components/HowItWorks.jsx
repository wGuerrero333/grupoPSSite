const steps = [
  {
    number: 1,
    title: 'Publica tu Artículo',
    description:
      'Toma fotos, escribe una descripción y establece tu precio o preferencias de intercambio',
  },
  {
    number: 2,
    title: 'Conecta con Compradores',
    description:
      'Los compradores interesados te enviarán mensajes directamente a través de nuestra plataforma segura',
  },
  {
    number: 3,
    title: 'Completa el Trato',
    description:
      'Reúnete de forma segura en persona o usa nuestras opciones de envío para completar tu transacción',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GRUPO PS</h2>
          <p className="section-description">
            Comenzar es simple. Sigue estos sencillos pasos para comprar, vender
            o intercambiar.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
