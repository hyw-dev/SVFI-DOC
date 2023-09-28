import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as p,b as a,d as n,a as s,w as c,e as r}from"./app-a587a3d8.js";const u={},d=a("h2",{id:"video-frame-interpolation-vfi",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#video-frame-interpolation-vfi","aria-hidden":"true"},"#"),n(" Video Frame Interpolation = VFI")],-1),k=a("p",null,"Frame interpolation refers to improving the video frame rate through certain specific algorithms, that is, inserting new frames that are not included in the original video between frames to make the look and feel smoother.",-1),m={href:"https://en.wikipedia.org/wiki/Motion_compensation",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Optical_flow",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/megvii-research/ECCV2022-RIFE",target:"_blank",rel:"noopener noreferrer"},b={style:{"text-align":"right"}},f=r(`<p>Effect reference:</p><p>::: cardImgList</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">target</span><span class="token punctuation">:</span> _blank
    <span class="token key atrule">imgHeight</span><span class="token punctuation">:</span> auto
    <span class="token key atrule">objectFit</span><span class="token punctuation">:</span> contain
    <span class="token key atrule">lineClamp</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">data</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/yuan.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Genshin Impact
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> Drama CM short film<span class="token punctuation">,</span> 8K 60fps
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1FS4y1C7RD
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI Vision
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/umaron.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Umaron
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> Season 2 NCOP 8K 60fps
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1QY411b7e4
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI Vision
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/emilia.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Re Zero<span class="token punctuation">-</span>Starting Life in Another World
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> Season 2 NCED Believe in you
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1kF411p7FB
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI Vision
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4);function g(_,y){const e=t("ExternalLinkIcon"),i=t("RouterLink");return l(),p("div",null,[d,k,a("p",null,[n('Common algorithms include "MEMC" based on '),a("a",m,[n("hardware"),s(e)]),n(", the software-based "),a("a",v,[n("optical flow method"),s(e)]),n(".")]),a("p",null,[n("SVFI uses the deep learning-based frame interpolation algorithm "),a("a",h,[n("RIFE and its derivatives"),s(e)]),n(" to complement the frame, and its effect is better than other algorithms.")]),a("div",b,[a("p",null,[s(i,{to:"/pages/052617/#vfi-model"},{default:c(()=>[n("Description of SVFI built-in VFI")]),_:1})])]),f])}const F=o(u,[["render",g],["__file","20.What is VFI.html.vue"]]);export{F as default};
