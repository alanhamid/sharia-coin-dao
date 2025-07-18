<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sharia Coin DAO – Bridging Faith and DeFi</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    body {
      font-family: 'Tajawal', sans-serif;
    }
    h1, h2 {
      font-family: 'Scheherazade New', serif;
    }
  </style>
</head>
<body class="bg-[#F9F5EE] text-[#5C5346]">

  <!-- Navigation Bar -->
  <header class="bg-[#F9F5EE] py-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between px-4">
      <img src="images/smallLogo1.png" alt="Bank of Sharia Logo" class="h-20" />
      <nav class="space-x-4">
         <a href="https://shariacoindao.com/whitepaperV1.pdf" class="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-500 font-bold mb-8" target="_blank"> Whitepaper </a> 
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
 <!-- Hero Section -->
  <section class="bg-[#EFE6D8] py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center px-4 gap-10">
      <div class="md:w-1/2">
        <h1 class="text-5xl text-[#01796F] font-bold mb-4">Sharia Coin DAO -
          <br><span class="text-[#DAA520]">Bridging Faith and Finance - Redefining DeFi.</span></h1>
        <p class="text-lg mb-4 font-semibold">Our mission is to build a more ethical, inclusive, and sustainable financial future by fusing the principles of Islamic finance (Sharia compliance) with the transformative power of Web3 and decentralized finance (DeFi).</p>
        <p class="text-lg mb-4 font-semibold"> Through blockchain technology, smart contracts, and digital assets, we’re creating a next-generation NeoBanking ecosystem — the Bank of Sharia — designed for global impact.
</p>
        <p class="text-lg mb-6 font-semibold"> But this is more than just a token or a virtual card.
						<br>Sharia Coin DAO is a community-driven movement — a platform for real-world utility, transparent governance, and financial empowerment that honors faith-based values while embracing technological innovation.</p>
       
      </div>
      <div class="md:w-1/2">
        <img src="Feature1.jpg" alt="DAO" class="rounded-lg shadow-lg mx-auto max-w-xs" />
      </div>
    </div>
  </section> 
<!-- ✅ Lightbox Modal -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" 
       id="enlargedImg" 
       src="images/sharia_tokenomics_chart.png" 
       alt="Tokenomics Full View">
</div>
<!-- ✅ JS -->
<script>
function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
  lightbox.style.display = 'flex';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = '1000';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';

  lightbox.appendChild(img);

  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', () => {
    document.body.removeChild(lightbox);
  });
}

</script>


    </div>
  </section>
  
 <!-- Rewards Section -->
  <section class="bg-[#F9F5EE] py-16">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div class="md:w-1/2">
        <h2 class="text-2xl font-bold text-center text-[#01796F] mb-4">For the next 100 years, the DAO is committed to empower the MENA region via DAO's Sadeqah Jariyah Fund. Learn more about it in our whitepaper.</h2>
    <div class="tokenomics-chart-wrapper">
        <p class="mb-6 text-center text-lg font-semibold ">Click the image to enlarge it</p>
      <img src="images/SteamflowDashboard.png" 
           alt="Sadqah Jariyah Fund" 
           class="tokenomics-chart cursor-pointer"
           onclick="openLightbox('images/SteamflowDashboard.png')" />
    </div>   
      </div>
     <div class="md:w-1/2">
        <img src="images/FrontShirtPrint2Small.png" alt="DAO" class="rounded-lg shadow-lg mx-auto max-w-xs mb-6" />
          <h2 class="text-2xl font-bold text-center text-[#01796F] mb-4">🌍 Join the Sharia Coin DAO Founding Circle</h2>
                                                <p class="text-lg mb-4 font-semibold"> 🟡 Become a Founding Member — 1,000 Tokens Only
                                                  <br>🟡 Help us shape the future of ethical finance.
                                                <br>🟡 For a limited time, we are offering 1,000 SCDT governance tokens at $25 CAN/token to close friends and early believers.</p>

         <p class="text-lg mb-4 font-semibold"><strong>🎁 What You Get:</strong>  
                                                    <br> ✅ 1 SCDT Governance & Voting Token (DAO voting rights)

                                                      <br> ✅ 500,000 SHARIA Coins, SHARIA (our official utility token)

                                                      <br> ✅ Lifetime DAO Membership

                                                      <br> ✅ Recognition as a Founding Supporter</p>

             <p class="text-lg mb-4 font-semibold">💼 Use of Funds:
                                                  <br>🟢 Formation of Sharia Coin DAO in RAK (UAE)

                                                  <br>🟢 Operational setup

                                                  <br>🟢 Regulatory compliance

                                                <br>🟢 Relocation and administrative costs</p>

           <p class="text-lg mb-4 font-semibold"> 🔶 Limited Allocation:
                                                <br> ℹ️ Only 1,000 tokens will be sold in this private round.
                                                  <br> ℹ️ Minimum purchase: 1 token. Maximum: 50 tokens per individual.</p>

       <p class="text-lg mb-4 font-semibold">📥 Payment Methods:
                                            <br> ₿  USDC (Solana, Ethereum, BSC)
                                            <br> 💳 AED or CAD Bank Transfer
                                            <br>🔐 Secure your place in history.</p>
                                             <p class="text-lg mb-4 font-semibold">
                                              👉  Support the launch of a financial system rooted in justice, ethics, and transparency.
                                              <br>Once our initial fundraising phase is complete, we’ll mint exclusive Founding Member NFTs — unique digital collectibles that honor your contribution and can be passed on to future generations.</p>
                                                 <h1 class="text-5xl text-[#01796F] font-bold mb-4">   Be Part of History -
          <br><span class="text-[#DAA520]">Build Your Legacy -  <br>For Next 100 Years!</span></h1>
             
        <div class="flex flex-wrap justify-center items-center gap-4 mt-6">    
           <a href="https://shariacoindao.com/scr/pages/scgt.jsx" class="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-500 font-bold mb-8" target="_blank"> Donate Today </a>
        </div>
      <h2 class="text-2xl font-bold text-[#01796F] mb-8">Have Questions? Contact <a href="mailto:admin@blokketensolutions.com" class="underline text-blue-600 hover:text-blue-800"> Blokketen Solutions</a>  </h2>

    </div>
  </div>  
  </section>
  <!-- Footer -->
  <footer class="bg-[#E3D0B2] py-6 text-center text-sm">
    <p>Follow us: <a href="https://x.com/ShariaCoinDAO" target="_blank" class="text-[#01796F] underline">Twitter</a></p>
    <p>&copy; 2025 Sharia Coin DAO. Owned by <a href="https://blokketensolutions.com" class="text-[#01796F] underline" target="_blank">Blokketen Solutions</a></p>
  </footer>

</body>
<style>
  .tokenomics-chart-wrapper {
    text-align: center;
    margin-top: 40px;
  }

  .tokenomics-chart {
    width: 100%;
    max-width: 400px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.2s;
  }

  .tokenomics-chart:hover {
    transform: scale(1.03);
  }

  .lightbox {
    display: none;
    position: fixed;
    z-index: 9999;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
    overflow: auto;
  }

  .lightbox-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
  }

  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .tokenomics-chart {
      width: 80%;
    }
  }
</style>



</html>
