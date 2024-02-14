class MHeader extends HTMLElement{constructor(){super(),this.selectors={headers:["header"],logos:[".m-logo"],topbar:".m-topbar",headerWrapper:".m-header__wrapper",topbarClose:".m-topbar__close"},this.domNodes=queryDomNodes(this.selectors,this),this.innerWidth=window.innerWidth,this.headerOffsetTop=this.domNodes.headerWrapper.offsetTop,this.headerHeight=this.domNodes.headerWrapper.offsetHeight,this.stickyEnabled="true"===this.dataset.sticky||!1,this.classes={scrollUp:"scroll-up",scrollDown:"scroll-down",stuck:"stuck"},this.init()}init(){this.transparentHeader=this.domNodes&&this.domNodes.headers[0]&&"true"===this.domNodes.headers[0].dataset.transparent,this.initAddon(),this.handleSticky(),document.addEventListener("matchMobile",(()=>this.handleSticky())),document.addEventListener("unmatchMobile",(()=>this.handleSticky())),this.siteNav=new SiteNav(this),window.__sfHeader=this,window.addEventListener("resize",(()=>{this.innerWidth=window.innerWidth}))}initAddon(){this.megamenu=new Megamenu(this),Shopify.designMode&&(MinimogTheme=MinimogTheme||{},MinimogTheme&&MinimogTheme.Wishlist&&MinimogTheme.Wishlist.updateWishlistCount())}handleSticky(){let s=20;document.querySelectorAll(".shopify-section-group-header-group").forEach((e=>{e.classList.contains("m-section-header")||(s+=e.offsetHeight)}));const e=document.querySelector(".m-topbar");if(e&&(s+=e.offsetHeight),!this.stickyEnabled)return;let t=0;window.addEventListener("scroll",(()=>{const e=window.scrollY;e<=s?this.classList.remove(this.classes.scrollUp,this.classes.stuck):(this.classList.add(this.classes.stuck),e>this.headerHeight+s&&e>t&&!this.classList.contains(this.classes.scrollDown)?(this.classList.remove(this.classes.scrollUp),this.classList.add(this.classes.scrollDown)):e<t&&this.classList.contains(this.classes.scrollDown)&&(this.classList.remove(this.classes.scrollDown),this.classList.add(this.classes.scrollUp)),t=e)}))}}customElements.define("m-header",MHeader);