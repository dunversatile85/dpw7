export default function Home() {
return (
<div style={{
background:"#0f0f10",
color:"#fff",
minHeight:"100vh",
fontFamily:"Arial"
}}>

{/* NAVBAR */}
<nav style={{
display:"flex",
justifyContent:"space-between",
padding:"20px 40px",
background:"#1a1a1d"
}}>
<h2>🎮 Don's Play World</h2>

<div>
<button style={navBtn}>Login</button>
<button style={navBtn}>Sign Up</button>
</div>
</nav>


{/* HERO */}
<section style={{
textAlign:"center",
padding:"80px 20px"
}}>
<h1 style={{
fontSize:"64px",
fontWeight:"900"
}}>
Earn Rewards Playing Games
</h1>

<p style={{
fontSize:"22px",
color:"#aaa"
}}>
Play • Offers • Surveys • Cash Out
</p>

<button style={mainBtn}>
Start Earning
</button>
</section>


{/* DASHBOARD STATS */}
<section style={grid}>

<div style={card}>
<h2>12,500</h2>
<p>Coins Balance</p>
</div>

<div style={card}>
<h2>$25</h2>
<p>Available Cashout</p>
</div>

<div style={card}>
<h2>8</h2>
<p>Offers Completed</p>
</div>

</section>


{/* OFFER WALL */}
<section style={{padding:"50px"}}>
<h2>Featured Offers</h2>

<div style={grid}>

<div style={card}>
<h3>🎮 Tapjoy</h3>
<p>Complete offers for rewards</p>
<button style={offerBtn}>Open Offers</button>
</div>

<div style={card}>
<h3>📱 App Installs</h3>
<p>Download and earn coins</p>
<button style={offerBtn}>Start</button>
</div>

<div style={card}>
<h3>📝 Surveys</h3>
<p>Answer surveys for cash</p>
<button style={offerBtn}>Take Surveys</button>
</div>

</div>
</section>


{/* LEADERBOARD */}
<section style={{padding:"50px"}}>
<h2>Top Earners</h2>

<div style={card}>
<p>🥇 PlayerOne — $248</p>
<p>🥈 GamerKing — $191</p>
<p>🥉 You — $42</p>
</div>
</section>


{/* CASHOUT */}
<section style={{padding:"50px"}}>
<h2>Withdraw Rewards</h2>

<div style={grid}>
<div style={card}>PayPal</div>
<div style={card}>Amazon</div>
<div style={card}>Visa</div>
<div style={card}>Crypto</div>
</div>
</section>

</div>
)
}

const navBtn={
background:"transparent",
border:"1px solid white",
color:"white",
padding:"10px 18px",
marginLeft:"10px",
borderRadius:"8px"
}

const mainBtn={
background:"#fff",
color:"#000",
padding:"18px 35px",
marginTop:"30px",
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
background:"#1a1a1d",
padding:"30px",
borderRadius:"20px"
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"25px",
padding:"50px"
}
