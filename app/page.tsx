export default function Home() {
return (
<div style={{
background:"#0f0f10",
color:"#fff",
minHeight:"100vh",
fontFamily:"Arial"
}}>

<nav style={{
display:"flex",
justifyContent:"space-between",
padding:"20px 40px",
background:"#17181c",
borderBottom:"1px solid #2b2d33"
}}>
<h2>Don's Play World</h2>

<div>
<button style={navBtn}>Login</button>
<button style={navBtn}>Google Sign In</button>
</div>
</nav>


<section style={{
textAlign:"center",
padding:"100px 20px"
}}>
<h1 style={{
fontSize:"64px",
fontWeight:"900"
}}>
Earn Rewards Playing Games
</h1>

<p style={{
fontSize:"24px",
color:"#aaa",
marginTop:"20px"
}}>
Complete offers • Earn points • Cash out
</p>

<div style={{marginTop:"40px"}}>
<button style={heroBtn}>Start Earning</button>
<button style={heroBtn}>Claim Daily Bonus</button>
</div>
</section>


<section style={{
padding:"60px",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"25px"
}}>

<div style={card}>
<h3>🎮 Tapjoy Offers</h3>
<p>Play games and earn rewards</p>
<button style={offerBtn}>Open Tapjoy</button>
</div>

<div style={card}>
<h3>💰 RevU Offers</h3>
<p>High paying offer wall</p>
<button style={offerBtn}>Open RevU</button>
</div>

<div style={card}>
<h3>📱 OfferToro</h3>
<p>Apps and installs</p>
<button style={offerBtn}>Open OfferToro</button>
</div>

<div style={card}>
<h3>📝 CPX Surveys</h3>
<p>Paid survey rewards</p>
<button style={offerBtn}>Take Surveys</button>
</div>

</section>


<section style={{
padding:"60px"
}}>
<h2 style={{marginBottom:"30px"}}>
Rewards
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
}}>

<div style={card}>PayPal Cashout</div>
<div style={card}>Amazon Gift Cards</div>
<div style={card}>Visa Rewards</div>
<div style={card}>Crypto Withdraw</div>

</div>
</section>


<section style={{
padding:"60px"
}}>
<h2>Daily Bonus</h2>

<div style={card}>
<button style={heroBtn}>
Spin Reward Wheel
</button>
</div>
</section>


<footer style={{
padding:"40px",
textAlign:"center",
color:"#777"
}}>
Don's Play World © 2026
</footer>

</div>
)
}

const navBtn={
background:"transparent",
border:"1px solid #555",
color:"white",
padding:"12px 20px",
marginLeft:"10px",
borderRadius:"10px"
}

const heroBtn={
background:"#fff",
color:"#000",
padding:"16px 32px",
margin:"10px",
border:"none",
borderRadius:"12px",
fontWeight:"bold"
}

const offerBtn={
background:"#fff",
color:"#000",
padding:"12px 20px",
border:"none",
borderRadius:"10px",
marginTop:"15px"
}

const card={
background:"#1a1b20",
padding:"35px",
borderRadius:"22px"
}
