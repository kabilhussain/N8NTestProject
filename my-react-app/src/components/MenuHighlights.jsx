export default function MenuHighlights() {
  const menuItems = [
    {
      icon: "☕",
      name: "Classic Espresso",
      description: "Rich, bold, and brewed to perfection.",
    },
    {
      icon: "☕",
      name: "Creamy Cappuccino",
      description: "Velvety steamed milk meets a smooth espresso.",
    },
    {
      icon: "☕",
      name: "Vanilla Latte",
      description: "A comforting favorite with a touch of vanilla.",
    },
  ];

  return (
    <section className="menu-highlights" id="menu">
      <h2>Menu Highlights</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-item" key={item.name}>
            <span className="cup-float" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}