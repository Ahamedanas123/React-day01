import './App.css';

export default function App() {
  return (
    <div className="app1">
    <div className="App">
      <Details
        head="free"
        symbol="$"
        amount="0/month"
        user="✔ single user"
        storage="✔ 5GB storage"
        project="✔ unlimited public projects"
        access="✔ community access"
        private="❌ Unlimited Private Projects"
        phone="❌ Dedicated Phone Support"
        subdomain="❌ Free Subdomain"
        report="❌ Monthly Status Reports"
        button="BUTTON"
       
      />

      <Details
        head="plus"
        symbol="$"
        amount="9/month"
        user="✔ 5 user"
        storage="✔ 50GB storage"
        project="✔ unlimited public projects"
        access="✔ community access"
        private="✔ Unlimited Private Projects"
        phone="✔ Dedicated Phone Support"
        subdomain="✔ Free Subdomain"
        report="❌ Monthly Status Reports"
        button="BUTTON"
      />

      <Details
        head="pro"
        symbol="$"
        amount="49/month"
        user="✔ unlimited user"
        storage="✔ 150GB storage"
        project="✔ unlimited public project"        
        access="✔ community access"
        private="✔ Unlimited Private Projects"
        phone="✔ Dedicated Phone Support"
        subdomain="✔ unlimited Free Subdomain"
        report="✔ Monthly Status Reports"
        button="BUTTON"
      />
    </div>
    </div>
  );
}

function Details(props) {
  return (
    <div className="card">
      <h1>{props.head}</h1>
      <h3><span>{props.symbol}</span>
      {props.amount}
      </h3>
      <hr />
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.project}</p>
      <p>{props.access}</p>
      <p>{props.private}</p>
      <p>{props.phone}</p>
      <p>{props.sundomain}</p>
      <p>{props.report}</p>
      <h5>{props.button}</h5>
      </div>
  );
}