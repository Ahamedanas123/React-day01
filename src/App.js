import './App.css';

export default function App() {
  return (
    <div className="app1">
    <div className="App">
      <Details
        head="FREE"
        symbol="$"
        amount="0/"
        month="month"
        user="✔ Single User"
        storage="✔ 5GB Storage"
        project="✔ Unlimited Public Projects"
        access="✔ Community Access"
        private="❌ Unlimited Private Projects"
        phone="❌ Dedicated Phone Support"
        subdomain="❌ Free Subdomain"
        report="❌ Monthly Status Reports"
        button="BUTTON"
       
      />

      <Details
        head="PLUS"
        symbol="$"
        amount="9/"
        month="month"
        user="✔ 5 User"
        storage="✔ 50GB Storage"
        project="✔ Unlimited Public Projects"
        access="✔ Community Access"
        private="✔ Unlimited Private Projects"
        phone="✔ Dedicated Phone Support"
        subdomain="✔ Free Subdomain"
        report="❌ Monthly Status Reports"
        button="BUTTON"
      />

      <Details
        head="PRO"
        symbol="$"
        amount="49/"
        month="month"
        user="✔ Unlimited User"
        storage="✔ 150GB Storage"
        project="✔ Unlimited Public Project"        
        access="✔ Community Access"
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
      <h4>{props.head}</h4>
      <h3><label>{props.symbol}</label>
      {props.amount}<span>{props.month}</span>
      </h3>
      <hr />
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.project}</p>
      <p>{props.access}</p>
      <p>{props.private}</p>
      <p>{props.phone}</p>
      <p>{props.subdomain}</p>
      <p>{props.report}</p>
      <h5>{props.button}</h5>
      </div>
  );
}