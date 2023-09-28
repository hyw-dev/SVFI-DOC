import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as n,c as i,b as e,d as t,a as c,e as s}from"./app-a587a3d8.js";const d={},p={class:"hint-container tip"},l=e("p",{class:"hint-container-title"},"提示",-1),h={href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"},b=s('<h2 id="帧率-分辨率" tabindex="-1"><a class="header-anchor" href="#帧率-分辨率" aria-hidden="true">#</a> 帧率，分辨率</h2><p>视频是由连续的图像构成的。每一张图像，我们称为<strong>一帧</strong>(frame)。图像则是由<strong>像素</strong>(pixel)构成的。一张图像有多少像素，称为这个图像的分辨率。比如说1920x1080的图像，说明它是由横纵1920x1080个像素点构成。视频的分辨率就是每一帧图像的分辨率。</p><p>一个视频，每一秒由多少图像构成，称为这个视频的<strong>帧率(frame-rate)</strong>。常见的帧率有<code>24000/1001=23.976</code>, <code>30000/1001=29.970</code>, <code>60000/1001=59.940</code>, <code>25.000</code>, <code>50.000</code>等等。这个数字是一秒钟内闪过的图像的数量。比如23.976，就是1001秒内，有24000张图像。视频的帧率是可以是<strong>恒定的(cfr, Const Frame-Rate)</strong>，也可以是<strong>变化的(vfr, Variable Frame-Rate)</strong></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意SVFI不支持可变帧率(vfr)的处理，向SVFI输入此类视频会导致音频和画面不同步。</p><p>SVFI仅支持整数（如25.00, 24.00）及NTSC制式（分母为1001的帧率，如23.976、29.97、59.94）的帧率作为输入。</p><p>输入其他类型的帧率（如24.5），会被视作NTSC制式帧率并很大概率导致输出音画不同步。</p></div><h2 id="码率" tabindex="-1"><a class="header-anchor" href="#码率" aria-hidden="true">#</a> 码率</h2><p><strong>码率</strong> 的定义是视频文件体积除以时间。单位一般是Kbps(Kbit/s)或者Mbps(Mbit/s)。注意1B(Byte)=8b(bit)。所以一个24分钟，900MB的视频：</p><ul><li><p>体积：<code>900MB = 900MByte = 7200Mbit</code></p></li><li><p>时间：<code>24min = 1440s</code></p></li><li><p>码率：<code>7200/1440 = 5000 Kbps = 5Mbps</code></p></li></ul><p>当视频文件的时间基本相同的时候（比如现在一集番大概是24分钟），码率和体积基本上是等价的，都是用来描述视频大小的参数。长度分辨率都相同的文件，体积不同，实际上就是码率不同。</p><p>码率也可以解读为单位时间内，用来记录视频的数据总量。码率越高的视频，意味着用来记录视频的数据量越多，潜在的解读就是视频可以拥有更好的质量。（注意，仅仅是潜在，后文我们会分析为什么高码率不一定等于高画质）</p><h3 id="码率控制方法" tabindex="-1"><a class="header-anchor" href="#码率控制方法" aria-hidden="true">#</a> 码率控制方法</h3><p>码率控制是指视频编码中决定输出码率的过程，常用的码率控制方法有：</p><h4 id="cbr-constant-bitrate" tabindex="-1"><a class="header-anchor" href="#cbr-constant-bitrate" aria-hidden="true">#</a> CBR(Constant Bitrate)</h4><p>固定比特率，指文件从头到尾都是一种位速率。相对于VBR和ABR来讲，它压缩出来的文件体积很大，而且视频质量相对于VBR和ABR不会有明显的提高。</p><p><strong>特点：</strong></p><ul><li>码率稳定，但是质量不稳定，带宽有效利用率不高，特别当该值设置不合理，在复杂运动场景下，如果设置的码率不够，画面则会非常模糊，非常影响观看体验；</li><li>但是输出视频码率基本稳定，便于计算视频体积大小；</li></ul><h4 id="vbr-variable-bitrate" tabindex="-1"><a class="header-anchor" href="#vbr-variable-bitrate" aria-hidden="true">#</a> VBR(Variable Bitrate)</h4><p>动态比特率，也就是<strong>没有固定的比特率</strong>，音视频压缩软件在压缩时根据音视频数据的复杂程度即时确定使用什么比特率，这是以质量为前提兼顾文件大小的方式。</p><p>相对于CBR来说<br> 适用场景：VBR适用于那些对带宽和编码速度不太限制，但是对质量有很高要求的场景。特别是在运动的复杂场景下也可以保持比较高的清晰度且输出质量比较稳定，适合对延时不敏感的点播，录播或者存储系统。</p><p><strong>特点：</strong></p><ul><li>码率不稳定，质量基本稳定且非常高；</li><li>编码速度一般比较慢，点播、下载和存储系统可以优先使用，不适合低延时、直播系统；</li><li>这种模型完全不考虑输出的视频带宽，为了质量，需要多少码率就占用多少，也不太考虑编码速度；</li></ul><h4 id="cqp-constant-qp" tabindex="-1"><a class="header-anchor" href="#cqp-constant-qp" aria-hidden="true">#</a> CQP(Constant QP)</h4><blockquote><p>应该算编码器实现VBR的方式</p></blockquote><p>固定QP，最简单的码率控制方式，每帧图像都按照一个特定的QP来编码，每帧编码后的数据量有多大是未知的，既不是码率优先模型也不是质量优先模型，不过是实现最简单的模型；</p><p>适用场景：一般不建议使用这种方式，因为这种方式不考虑编码内容的复杂性，用相同的压缩比处理每一帧。出来的视频质量和码率都不固定。个人觉得只有那种非常简单的场景，比如静止不变的场景运动量很小的场景可以尝试用，一遇到复杂场景，码率波动就非常大。或者在算法研究或者验证可以使用。</p><p><strong>特点：</strong></p><ul><li>瞬时码率会随场景复杂度波动；</li><li>编码速度快，调控最简单,每帧的QP值相同；</li></ul><h4 id="crf-constant-rate-factor" tabindex="-1"><a class="header-anchor" href="#crf-constant-rate-factor" aria-hidden="true">#</a> <strong>CRF(Constant Rate Factor)</strong></h4><p>应该算编码器实现VBR的方式<br> 恒定码率系数。把某一个”视觉质量”作为输出目标。通过降低那些耗费码率但是又难以用肉眼察觉的帧（高速运动或者纹理丰富）的质量提升那些静态帧的码率来达到此目的。</p><p><strong>特点：帧间QP变化，帧内宏块的QP变化，输出码率未知，各帧输出的视觉质量基本恒定，这种方式相当于固定质量模式+限制码率峰值的方式。</strong></p><ul><li>适用场景：对视频质量有一定要求的场合，CRF值可以简单理解为对视频质量期望的一个输出固定值，希望无论是在运动复杂场景下还是在静止简单情况下，都希望有一个稳定的主观视频质量可以选择该模式，该模式是视频质量优先模型。视频质量可以简单理解为视频的清晰度，像素的细腻程度和视频的流畅度。</li><li>与恒定QP类似，但追求主观感知到的质量恒定，瞬时码率也会随场景复杂度波动，视频帧之间或者内部宏块之间的QP值都不一样；</li><li>对于快速运动或细节丰富的场景会适当增大量化失真（因为人眼不敏感），反之对于静止或平坦区域则减少量化失真；</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>SVFI 内置<code>渲染质量CRF</code>(即CRF或CQP)、<code>目标码率</code>(CBR)两种码率控制方案。</p><p>在使用<code>渲染质量CRF</code>来控制码率时，SVFI对除<code>NVENC</code>以外的编码器使用CRF控制；对<code>NVENC</code>编码器使用CQP码率控制。</p><p>在使用<code>目标码率</code>来控制码率时，统一使用固定比特率（CBR）控制。</p></div>',31);function u(g,f){const a=o("ExternalLinkIcon");return n(),i("div",null,[e("div",p,[l,e("p",null,[t("以下内容截取自"),e("a",h,[t("FXXS-Encode-Guide"),c(a)]),t("，感谢他们的付出")])]),b])}const C=r(d,[["render",u],["__file","index.html.vue"]]);export{C as default};
