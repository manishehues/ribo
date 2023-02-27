(()=>{"use strict";var e,t={241:(e,t,o)=>{const n=window.wp.element,i=window.wp.blockEditor,r=window.wp.components,s=window.wp.compose,a=window.wp.data,l=window.wp.hooks,m=window.wp.api;var c=o.n(m);const d=()=>{const{createNotice:e}=(0,a.dispatch)("core/notices"),[t,o]=(0,n.useState)({}),[i,r]=(0,n.useState)("loading"),s=()=>{c().loadPromise.then((async()=>{try{const e=new(c().models.Settings),t=await e.fetch();o(t)}catch(e){r("error")}finally{r("loaded")}}))};return(0,n.useEffect)((()=>{s()}),[]),[e=>t?.[e],function(t,o){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Settings saved.";r("saving");const i=new(c().models.Settings)({[t]:o}).save();i.success(((t,o)=>{"success"===o&&(r("loaded"),e("success",n,{isDismissible:!0,type:"snackbar"})),"error"===o&&(r("error"),e("error","An unknown error occurred.",{isDismissible:!0,type:"snackbar"})),s()})),i.error((t=>{r("error"),e("error",t.responseJSON.message?t.responseJSON.message:"An unknown error occurred.",{isDismissible:!0,type:"snackbar"})}))},i]},u=e=>new Promise((t=>{wp.updates.ajax("install-plugin",{slug:e,success:()=>{t({success:!0})},error:e=>{t({success:!1,code:e.errorCode})}})})),p=e=>new Promise((t=>{jQuery.get(e).done((()=>{t({success:!0})})).fail((()=>{t({success:!1})}))})),h=(e,t)=>{const o={};return Object.keys(t).forEach((function(e){"innerBlocks"!==e&&(o[e]=t[e])})),e.push(o),Array.isArray(t.innerBlocks)?(o.innerBlocks=t.innerBlocks.map((e=>e.id)),t.innerBlocks.reduce(h,e)):e},w={button:{display:"flex",justifyContent:"center",width:"100%"},image:{padding:"20px 0"},skip:{container:{display:"flex",flexDirection:"column",alignItems:"center"},button:{fontSize:"9px"},poweredby:{fontSize:"9px",textTransform:"uppercase"}}},g={"blocks-css":{title:"Custom CSS",description:"Enable Otter Blocks to add Custom CSS for this block.",image:"css.jpg"},"blocks-animation":{title:"Animations",description:"Enable Otter Blocks to add Animations for this block.",image:"animation.jpg"},"blocks-conditions":{title:"Visibility Conditions",description:"Enable Otter Blocks to add Visibility Conditions for this block.",image:"conditions.jpg"}},k=e=>{let{onClick:t}=e;return(0,n.createElement)("div",{style:w.skip.container},(0,n.createElement)(r.Button,{style:w.skip.button,variant:"tertiary",onClick:t},"Skip for now"),(0,n.createElement)("span",{style:w.skip.poweredby},"Recommended by ",window.themeisleSDKPromotions.product))},E=(0,s.createHigherOrderComponent)((e=>t=>{if(t.isSelected&&Boolean(window.themeisleSDKPromotions.showPromotion)){const[o,s]=(0,n.useState)(!1),[a,l]=(0,n.useState)("default"),[m,c]=(0,n.useState)(!1),[h,E,y]=d(),f=async()=>{s(!0),await u("otter-blocks"),E("themeisle_sdk_promotions_otter_installed",!Boolean(h("themeisle_sdk_promotions_otter_installed"))),await p(window.themeisleSDKPromotions.otterActivationUrl),s(!1),l("installed")},b=()=>"installed"===a?(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Awesome! Refresh the page to see Otter Blocks in action.")):(0,n.createElement)(r.Button,{variant:"secondary",onClick:f,isBusy:o,style:w.button},"Install & Activate Otter Blocks"),P=()=>{const e={...window.themeisleSDKPromotions.option};e[window.themeisleSDKPromotions.showPromotion]=(new Date).getTime()/1e3|0,E("themeisle_sdk_promotions",JSON.stringify(e)),window.themeisleSDKPromotions.showPromotion=!1};return(0,n.useEffect)((()=>{m&&P()}),[m]),m?(0,n.createElement)(e,t):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,t),(0,n.createElement)(i.InspectorControls,null,Object.keys(g).map((e=>{if(e===window.themeisleSDKPromotions.showPromotion){const t=g[e];return(0,n.createElement)(r.PanelBody,{key:e,title:t.title,initialOpen:!1},(0,n.createElement)("p",null,t.description),(0,n.createElement)(b,null),(0,n.createElement)("img",{style:w.image,src:window.themeisleSDKPromotions.assets+t.image}),(0,n.createElement)(k,{onClick:()=>c(!0)}))}}))))}return(0,n.createElement)(e,t)}),"withInspectorControl");(0,a.select)("core/edit-site")||(0,l.addFilter)("editor.BlockEdit","themeisle-sdk/with-inspector-controls",E);const y=window.wp.plugins,f=window.wp.editPost;function b(e){let{stacked:t=!1,noImage:o=!1,type:i,onDismiss:s,onSuccess:a,initialStatus:l=null}=e;const{assets:m,title:c,email:h,option:w,optionKey:g,optimoleActivationUrl:k,optimoleApi:E,optimoleDash:y,nonce:f}=window.themeisleSDKPromotions,[b,P]=(0,n.useState)(!1),[S,v]=(0,n.useState)(h||""),[O,B]=(0,n.useState)(!1),[D,A]=(0,n.useState)(l),[_,C]=d(),N=async()=>{B(!0);const e={...w};e[i]=(new Date).getTime()/1e3|0,window.themeisleSDKPromotions.option=e,await C(g,JSON.stringify(e)),s&&s()},K=()=>{P(!b)},x=e=>{v(e.target.value)},I=async e=>{e.preventDefault(),A("installing"),await u("optimole-wp"),A("activating"),await p(k),C("themeisle_sdk_promotions_optimole_installed",!Boolean(_("themeisle_sdk_promotions_optimole_installed"))),A("connecting");try{await fetch(E,{method:"POST",headers:{"X-WP-Nonce":f,"Content-Type":"application/json"},body:JSON.stringify({email:S})}),a&&a(),A("done")}catch(e){A("done")}};if(O)return null;const j=()=>"done"===D?(0,n.createElement)("div",{className:"done"},(0,n.createElement)("p",null,"Awesome! You are all set!"),(0,n.createElement)(r.Button,{icon:"external",isPrimary:!0,href:y,target:"_blank"},"Go to Optimole dashboard")):D?(0,n.createElement)("p",{className:"om-progress"},(0,n.createElement)("span",{className:"dashicons dashicons-update spin"}),(0,n.createElement)("span",null,"installing"===D&&"Installing","activating"===D&&"Activating","connecting"===D&&"Connecting to API","…")):(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",null,"Enter your email address to create & connect your account"),(0,n.createElement)("form",{onSubmit:I},(0,n.createElement)("input",{defaultValue:S,type:"email",onChange:x,placeholder:"Email address"}),(0,n.createElement)(r.Button,{isPrimary:!0,type:"submit"},"Start using Optimole"))),F=()=>(0,n.createElement)(r.Button,{disabled:D&&"done"!==D,onClick:N,isLink:!0,className:"om-notice-dismiss"},(0,n.createElement)("span",{className:"dashicons-no-alt dashicons"}),(0,n.createElement)("span",{className:"screen-reader-text"},"Dismiss this notice."));return t?(0,n.createElement)("div",{className:"ti-om-stack-wrap"},(0,n.createElement)("div",{className:"om-stack-notice"},F(),(0,n.createElement)("img",{src:m+"/optimole-logo.svg",alt:"Optimole logo"}),(0,n.createElement)("h2",null,"Get more with Optimole"),(0,n.createElement)("p",null,"om-editor"===i||"om-image-block"===i?"Increase this page speed and SEO ranking by optimizing images with Optimole.":"Leverage Optimole's full integration with Elementor to automatically lazyload, resize, compress to AVIF/WebP and deliver from 400 locations around the globe!"),!b&&"done"!==D&&(0,n.createElement)(r.Button,{isPrimary:!0,onClick:K,className:"cta"},"Get Started Free"),(b||"done"===D)&&j(),(0,n.createElement)("i",null,c))):(0,n.createElement)(n.Fragment,null,F(),(0,n.createElement)("div",{className:"content"},!o&&(0,n.createElement)("img",{src:m+"/optimole-logo.svg",alt:"Optimole logo"}),(0,n.createElement)("div",null,(0,n.createElement)("p",null,c),(0,n.createElement)("p",{className:"description"},"om-media"===i?"Save your server space by storing images to Optimole and deliver them optimized from 400 locations around the globe. Unlimited images, Unlimited traffic.":"This image looks to be too large and would affect your site speed, we recommend you to install Optimole to optimize your images."),!b&&(0,n.createElement)("div",{className:"actions"},(0,n.createElement)(r.Button,{isPrimary:!0,onClick:K},"Get Started Free"),(0,n.createElement)(r.Button,{isLink:!0,target:"_blank",href:"https://wordpress.org/plugins/optimole-wp"},(0,n.createElement)("span",{className:"dashicons dashicons-external"}),(0,n.createElement)("span",null,"Learn more"))),b&&(0,n.createElement)("div",{className:"form-wrap"},j()))))}const P=()=>{const[e,t]=(0,n.useState)(!0),{getBlocks:o}=(0,a.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return{getBlocks:t}}));var i;if((i=o(),"core/image",i.reduce(h,[]).filter((e=>"core/image"===e.name))).length<2)return null;const r="ti-sdk-optimole-post-publish "+(e?"":"hidden");return(0,n.createElement)(f.PluginPostPublishPanel,{className:r},(0,n.createElement)(b,{stacked:!0,type:"om-editor",onDismiss:()=>{t(!1)}}))};new class{constructor(){const{showPromotion:e,debug:t}=window.themeisleSDKPromotions;this.promo=e,this.debug="1"===t,this.domRef=null,this.run()}run(){if(this.debug)this.runAll();else switch(this.promo){case"om-attachment":this.runAttachmentPromo();break;case"om-media":this.runMediaPromo();break;case"om-editor":this.runEditorPromo();break;case"om-image-block":this.runImageBlockPromo();break;case"om-elementor":this.runElementorPromo()}}runAttachmentPromo(){wp.media.view.Attachment.Details.prototype.on("ready",(()=>{setTimeout((()=>{this.removeAttachmentPromo(),this.addAttachmentPromo()}),100)})),wp.media.view.Modal.prototype.on("close",(()=>{setTimeout(this.removeAttachmentPromo,100)}))}runMediaPromo(){if(window.themeisleSDKPromotions.option["om-media"])return;const e=document.querySelector("#ti-optml-notice");e&&(0,n.render)((0,n.createElement)(b,{type:"om-media",onDismiss:()=>{e.style.opacity=0}}),e)}runImageBlockPromo(){if(window.themeisleSDKPromotions.option["om-image-block"])return;let e=!0,t=null;const o=(0,s.createHigherOrderComponent)((o=>r=>"core/image"===r.name&&e?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o,r),(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(b,{stacked:!0,type:"om-image-block",initialStatus:t,onDismiss:()=>{e=!1},onSuccess:()=>{t="done"}}))):(0,n.createElement)(o,r)),"withImagePromo");(0,l.addFilter)("editor.BlockEdit","optimole-promo/image-promo",o,99)}runEditorPromo(){window.themeisleSDKPromotions.option["om-editor"]||(0,y.registerPlugin)("optimole-promo",{render:P})}runElementorPromo(){if(!window.elementor)return;const e=this;elementor.on("preview:loaded",(()=>{elementor.panel.currentView.on("set:page:editor",(t=>{e.domRef&&(0,n.unmountComponentAtNode)(e.domRef),t.activeSection&&"section_image"===t.activeSection&&e.runElementorActions(e)}))}))}addAttachmentPromo(){if(this.domRef&&(0,n.unmountComponentAtNode)(this.domRef),window.themeisleSDKPromotions.option["om-attachment"])return;const e=document.querySelector("#ti-optml-notice-helper");e&&(this.domRef=e,(0,n.render)((0,n.createElement)("div",{className:"notice notice-info ti-sdk-om-notice",style:{margin:0}},(0,n.createElement)(b,{noImage:!0,type:"om-attachment",onDismiss:()=>{e.style.opacity=0}})),e))}removeAttachmentPromo(){const e=document.querySelector("#ti-optml-notice-helper");e&&(0,n.unmountComponentAtNode)(e)}runElementorActions(e){if(window.themeisleSDKPromotions.option["om-elementor"])return;const t=document.querySelector("#elementor-panel__editor__help"),o=document.createElement("div");o.id="ti-optml-notice",e.domRef=o,t&&(t.parentNode.insertBefore(o,t),(0,n.render)((0,n.createElement)(b,{stacked:!0,type:"om-elementor",onDismiss:()=>{o.style.opacity=0}}),o))}runAll(){this.runAttachmentPromo(),this.runMediaPromo(),this.runEditorPromo(),this.runImageBlockPromo(),this.runElementorPromo()}}}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var m=i();void 0!==m&&(t=m)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,s=o[0],a=o[1],l=o[2],m=0;if(s.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);m<s.length;m++)r=s[m],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self.webpackChunkthemeisle_sdk=self.webpackChunkthemeisle_sdk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[431],(()=>n(241)));i=n.O(i)})();