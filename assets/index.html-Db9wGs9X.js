import{_ as a,a as r}from"./clip_image003-r2dVYCQA.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as c,c as p,b as t,d as i,a as o,w as d,e as g}from"./app-aVdQq8dE.js";const u="/Statics/QuickGuide/clip_image008.png",m="/Statics/QuickGuide/clip_image009.png",_={},f=g('<h2 id="svfi-上手指南" tabindex="-1"><a class="header-anchor" href="#svfi-上手指南" aria-hidden="true">#</a> SVFI 上手指南</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以下是使用SVFI对一个视频进行补帧的基本教程。</p><p>对图片序列补帧同理，只需将输入视频替换为存放图片序列的文件夹即可，并在<code>基础设置</code>指定图片序列的输入帧率。</p></div><p>欢迎使用Squirrel Video Frame Interpolation补帧软件。此软件致力于将卡顿的低帧率视频升格为流畅的高帧率视频。</p><p>无论您之前是否有过任何类似的补帧经验，请您相信，如果遵照以下流程，您将会获得一段愉快的补帧体验。</p><ul><li>确认自己的显卡符合本软件的最低要求：<strong>GTX 750Ti</strong>及以上，<strong>Maxwell</strong>架构以上的显卡。如不符合此要求，请及时退款止损，并换用其他补帧软件。</li><li>在Steam的内容库页面找到SVFI</li></ul><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>启动SVFI</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>等待软件启动，您将会看到以下的空白操作页面。这是SVFI的<strong>主界面</strong>。请注意，此教程针对SVFI 6.x全系列版本，您看到的软件版本号也许与截图不同。 <ul><li>要对一个<strong>视频</strong>进行补帧，您首先需要选择下面的选项❶“输入视频文件”，在弹出的文件选择窗口选择要补帧的视频。</li><li>您也可以将视频直接“拖”入窗口❷中。</li></ul></li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>SVFI仅支持8bit RGB图像序列输入，图片序列和视频均不支持透明通道处理</p></div><ul><li><p>输入一个视频后，我们需要进行一些基础设置。</p><ul><li><p>第一件事：从选项❶“设置输出文件夹”选择补完帧的视频的位置，即<strong>输出文件夹</strong>。如果不指定，补完帧的输出视频会在<strong>输入视频所在文件夹</strong>。</p></li><li><p>设置选项❷“输出文件格式”以确定补完帧的视频格式为<code>.mp4</code>、 <code>.mkv</code>或<code>.mov</code>，<code>mp4</code>文件通用性较好，<code>mkv</code>支持更多种类的音频，<code>mov</code>使用的场景比较少，一般用于Apple生态剪辑用。<strong>请尽可能与输入视频保持一致。若输入视频的格式不在上述三者中，使用mkv。</strong></p></li><li><p>您会发现选项❸左边已经显示了输入视频的帧率。您可以直接在选项❸“补帧倍率”中选择补帧的帧率倍数，或者在❹“输出帧率”中手动填写帧率。<strong>填多少都可以，60、120都行</strong>，SVFI会帮你处理好一切。</p></li></ul></li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),h=t("strong",null,"一键补帧",-1),x=t("li",null,[i("在点击❺"),t("strong",null,"一键补帧"),i("之前，为了防止报错，请关闭其他任何可能占用显存的软件。")],-1),v={href:"https://steamcommunity.com/app/1692080/discussions",target:"_blank",rel:"noopener noreferrer"};function S(V,k){const n=e("RouterLink"),l=e("ExternalLinkIcon");return c(),p("div",null,[f,t("ul",null,[t("li",null,[i("恭喜您已经完成了所有必要设置，现在点击❺"),h,i("，就可以去泡杯咖啡，在输出文件夹等待输出结果。 "),t("ul",null,[x,t("li",null,[i("如果软件还是不幸发生错误，或者你没在输出文件夹看到自己心心念念的输出视频，请移步"),o(n,{to:"/pages/QA/"},{default:d(()=>[i("常见问题解答")]),_:1}),i("获取可能的解决方案；")]),t("li",null,[i("如果此页内未列出相应问题的解决方案，请在"),t("a",v,[i("Steam讨论区"),o(l)]),i("发帖以联系开发人员帮助解决。")])])])])])}const y=s(_,[["render",S],["__file","index.html.vue"]]);export{y as default};
