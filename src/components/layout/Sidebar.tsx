const menuItens = [
  { id: "dashboard", label: "Dashboard" },
  { id: "Sales", label: "PDV / Vendas" },
  { id: "products", label: "Estoque" },
  { id: "customers", label: "Clientes" },
  { id: "receivables", label: "Contas a Receber" },
  { id: "exchanges", label: "Trocas de Produtos" },
  { id: "payables", label: "Contas a pagar" },
  { id: "history", label: "Historico" },
  { id: "settings", label: "Ajuste e Backup" },
];

export function Sidebar() {
  return (
    <aside>
      <div>
        <h2>MMC imports</h2>
      </div>

      <nav>
        {menuItens.map((item) => (
            <button key={item.id}>
                {item.label}
            </button>
        ))}
      </nav>
    </aside>
  );
}
