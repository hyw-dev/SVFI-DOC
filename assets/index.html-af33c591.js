import{_ as h,a as o}from"./33-be1effc0.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c,b as a,d as e,a as r,e as i}from"./app-a587a3d8.js";const d="/Statics/UserGuide/13.png",g="/Statics/UserGuide/6.png",u="/Statics/UserGuide/7.png",_="/Statics/UserGuide/8.png",b="/Statics/UserGuide/9.png",f="/Statics/UserGuide/10.png",x="/Statics/UserGuide/11.gif",v="/Statics/UserGuide/15.png",m="/Statics/UserGuide/14.gif",C="/Statics/UserGuide/17.png",R="/Statics/UserGuide/19.png",N="/Statics/UserGuide/20.png",S="/Statics/UserGuide/21.png",V="/Statics/UserGuide/23.png",A="/Statics/UserGuide/24.png",k={},w=i('<p>以下内容将为您介绍软件高级设置部分</p><h1 id="软件高级设置" tabindex="-1"><a class="header-anchor" href="#软件高级设置" aria-hidden="true">#</a> 软件高级设置</h1><h2 id="工作状态恢复" tabindex="-1"><a class="header-anchor" href="#工作状态恢复" aria-hidden="true">#</a> 工作状态恢复</h2><div align="center"><img src="'+d+'" width="911"></div><h3 id="自动寻找进度" tabindex="-1"><a class="header-anchor" href="#自动寻找进度" aria-hidden="true">#</a> 自动寻找进度</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当遇到任务中途断电或者其他以外情况终止任务导致程序退出的情况，可以通过点击 “<strong>自动寻找进度</strong>”来恢复上次的区块位置。</p></div><p>点击此按钮前请您先点击要恢复进度的任务条目。随后点击“<strong>一键补帧</strong>”，软件将弹窗向您确认补帧起始位置。</p><div align="center"><img src="'+g+'" width="1000"></div><h3 id="起始补帧时刻和结束补帧时刻" tabindex="-1"><a class="header-anchor" href="#起始补帧时刻和结束补帧时刻" aria-hidden="true">#</a> 起始补帧时刻和结束补帧时刻</h3><p>可以选择需要补帧的时间段</p><div align="center"><img src="'+u+'" width="869"></div><blockquote><p><strong>输入格式: 小时:分钟:秒</strong></p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>指定起始补帧时刻和结束补帧时刻后，手动终止或断电后均不支持进度恢复</p></div><h3 id="起始区块计数和起始输入帧数" tabindex="-1"><a class="header-anchor" href="#起始区块计数和起始输入帧数" aria-hidden="true">#</a> 起始区块计数和起始输入帧数</h3><p>自动寻找进度失败或需手动指定补帧起始位置时用，可用于手动恢复补帧进度</p><ul><li>起始区块计数 = 输出文件夹中导出的<strong>最后一个chunk数 + 1</strong>（例如图中的chunk-001，应将起始区块计数为<strong>1+1=2</strong>）</li><li>起始输入帧数 = 输出质量设置（渲染设置）中<code>单一输出区块大小 * (起始区块计数 - 1)</code></li></ul><div align="center"><img src="'+_+'" width="300"></div><div align="center"><img src="'+b+'" width="300"></div><div align="center"><img src="'+f+'" width="300"></div><p>如上图，一个视频 chunk有1000帧</p><h3 id="复原至原点" tabindex="-1"><a class="header-anchor" href="#复原至原点" aria-hidden="true">#</a> 复原至原点</h3><p>将起始区块和起始输入帧数归为原值，<strong>从零时刻开始补帧。</strong></p><div align="center"><img src="'+x+'" width="600"></div><h3 id="风险模式" tabindex="-1"><a class="header-anchor" href="#风险模式" aria-hidden="true">#</a> 风险模式</h3><p>需要恢复任务进度时，开启此项可以<strong>减少程序恢复进度所需的时间</strong>，但开启可能会造成<strong>音画不同步</strong>，<br><strong>不推荐开启</strong>。</p><div align="center"><img src="'+d+'" width="911"></div><h2 id="转场识别" tabindex="-1"><a class="header-anchor" href="#转场识别" aria-hidden="true">#</a> 转场识别</h2><div align="center"><img src="'+v+'" width="889"></div><h3 id="开启转场识别" tabindex="-1"><a class="header-anchor" href="#开启转场识别" aria-hidden="true">#</a> 开启转场识别</h3><p>识别场景切换</p><p>为了在补帧过程避免场景切换时产生<strong>果冻效应</strong>，建议您开启转场识别。</p><p>在勾选了开启转场识别之后，下方的参数值一般选择12；如果您发现最终导出的视频比较卡顿，可以考虑调节至15；<br> 如果发现<strong>果冻效应</strong>较多，可以考虑将参数值调到9，参数值的范围一般为9-15。</p><p><strong>如图：转场漏判产生果冻</strong></p><div align="center"><img src="'+m+'" width="600"></div><h3 id="最大识别阈值-默认不用调整" tabindex="-1"><a class="header-anchor" href="#最大识别阈值-默认不用调整" aria-hidden="true">#</a> 最大识别阈值 (默认不用调整)</h3><p>当没有开启 <strong>使用固定转场识别</strong> 时，建议值为80-90</p><p>当开启 <strong>使用固定转场识别</strong> 时，建议值为40-60</p><h3 id="使用固定转场识别" tabindex="-1"><a class="header-anchor" href="#使用固定转场识别" aria-hidden="true">#</a> 使用固定转场识别</h3><p>使用固定的阈值(最大识别阈值)来识别转场(不稳定)，仅在默认转场检测不准确时使用，如镜头非常多的混剪。</p><h3 id="转场使用帧混合" tabindex="-1"><a class="header-anchor" href="#转场使用帧混合" aria-hidden="true">#</a> 转场使用帧混合</h3><p>传统方法是复制前一帧作为转场帧。该方法是混合前后两帧 (渐变)</p><h3 id="输出转场帧" tabindex="-1"><a class="header-anchor" href="#输出转场帧" aria-hidden="true">#</a> 输出转场帧</h3><p>输出视频中的转场帧。<br> 转场帧将附带相关判决信息，以png格式输出在项目文件夹的scene文件夹中。</p><h2 id="输出分辨率设置" tabindex="-1"><a class="header-anchor" href="#输出分辨率设置" aria-hidden="true">#</a> 输出分辨率设置</h2><div align="center"><img src="'+C+'" width="883"></div><h3 id="输出文件分辨率" tabindex="-1"><a class="header-anchor" href="#输出文件分辨率" aria-hidden="true">#</a> 输出文件分辨率</h3><p>下拉框用于分辨率预设选择。<br> 在预设为Custom（自定义）时，您能够设置视频最终的输出分辨率。SVFI会先对画面的分辨率进行调整，之后再进行补帧。</p><h3 id="输出黑边长度" tabindex="-1"><a class="header-anchor" href="#输出黑边长度" aria-hidden="true">#</a> 输出黑边长度</h3><p>可用于裁剪视频中的黑边，需要手动指定宽高。</p>',49),D=a("strong",null,"高",-1),G=a("code",null,"270 = (原片高-实际高)÷2",-1),I=i('<blockquote><p>例：输入视频1920x1080，实际分辨率1920x800，超分2倍输出3840x1600。则黑边高填280, 输出分辨率可自定义为3840x1600</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若宽和高都输入-1，SVFI将自动识别输入视频的黑边并裁剪</p></div><h3 id="处理后补全黑边" tabindex="-1"><a class="header-anchor" href="#处理后补全黑边" aria-hidden="true">#</a> 处理后补全黑边</h3><p>切除黑边后进行处理（补帧或超分），补完帧后再把黑边自动加回来。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一定程度上可减少单帧计算量，加快处理速度。</p></div><h2 id="使用ai超分" tabindex="-1"><a class="header-anchor" href="#使用ai超分" aria-hidden="true">#</a> 使用AI超分</h2>',6),E={class:"hint-container tip"},U=a("p",{class:"hint-container-title"},"提示",-1),P={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},F=i('<p>使视频画面更清晰，目前支持9种有效的超分算法。</p><blockquote><p>处理动漫素材: Anime4K, AnimeSR, realCUGAN, realESR, waifu2x, waifuCuda</p><p>处理实拍素材: BasicVSR系列, FTVSR, NvidiaSR, realESR</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>SVFI对动漫素材和实拍素材的定义区分如下：</p><p><strong>动漫</strong>素材是主要由平面影像图层构成的运动视频片段，<strong>每一图层与另一图层的交界清晰</strong>。如，手绘2D动画，大多数三渲二画面等。</p><p><strong>实拍</strong>素材是使用单视点摄影机拍摄的真实世界画面或计算机生成图画，<strong>肉眼无法分辨出各个图层与其交界</strong>。如，真人电影，3D CG，3D游戏画面等。</p><p>特别地，我们认为3D/3G背景+2D人物制作的动画为动漫素材类别。</p></div><div align="center"><img src="'+R+'" width="861"></div><h2 id="对超分模型的介绍" tabindex="-1"><a class="header-anchor" href="#对超分模型的介绍" aria-hidden="true">#</a> 对超分模型的介绍</h2><h3 id="realcugan" tabindex="-1"><a class="header-anchor" href="#realcugan" aria-hidden="true">#</a> <strong>realCUGAN</strong></h3><p><strong>动漫专用 效果十分优秀</strong></p>',7),q=a("li",null,[a("p",null,"up2x代表2倍放大，3x,4x类似")],-1),H={href:"http://github.com",target:"_blank",rel:"noopener noreferrer"},B=a("li",null,[a("p",null,"带conservative字样的模型是保守类")],-1),T=a("li",null,[a("p",null,"带no-denoise的模型表现不进行降噪")],-1),M=a("li",null,[a("p",null,"带denoise的模型表现进行降噪,后面的数字代表降噪强度")],-1),L=i('<h3 id="ncnncugan" tabindex="-1"><a class="header-anchor" href="#ncnncugan" aria-hidden="true">#</a> <strong>ncnnCUGAN</strong></h3><p>CUGAN的NCNN版本(A卡，N卡，I卡通用)，介绍同上</p><h3 id="waifucuda" tabindex="-1"><a class="header-anchor" href="#waifucuda" aria-hidden="true">#</a> <strong>waifuCuda</strong></h3><p>用于动漫超分，速度与效果和cugan有些许相似、</p><h3 id="realesr" tabindex="-1"><a class="header-anchor" href="#realesr" aria-hidden="true">#</a> <strong>realESR</strong></h3><p><strong>3D动漫均可用，更适合动漫</strong></p><ul><li><p>RealESRGAN模型倾向于脑补,画面更加清晰,艳丽</p></li><li><p>RealESRNet模型倾向于涂抹,但画面保持原色彩</p></li><li><p>带anime标注的模型为动漫超分专用，速度较前两者略快</p></li><li><p>anime为官方模型，anime_110k为自训练模型</p></li><li><p>RealESR_RFDN 为自训练超分模型,速度快,适合于动漫输入</p></li></ul><h3 id="ncnnrealesr" tabindex="-1"><a class="header-anchor" href="#ncnnrealesr" aria-hidden="true">#</a> <strong>ncnnRealESR</strong></h3><p>realESR的NCNN版本，A卡，I卡，N卡通用</p><ul><li><p>realesr-animevideov3 (比较保守的动漫视频超分模型，速度较快，质量较高)</p></li><li><p>realesrgan-4xplus (4倍放大模型)</p></li><li><p>realesrgan-4xplus-anime (4倍动漫放大模型)</p></li></ul><h3 id="animesr-由tencent-arc-lab开发的动漫超分算法" tabindex="-1"><a class="header-anchor" href="#animesr-由tencent-arc-lab开发的动漫超分算法" aria-hidden="true">#</a> <strong>AnimeSR</strong> (由Tencent ARC Lab开发的动漫超分算法)</h3><p>仅一个四倍放大模型(AnimeSR_v2_x4.pth), 效果相比cugan更保守</p><h3 id="nvidiasr-由nvidia开发的超高速超分算法" tabindex="-1"><a class="header-anchor" href="#nvidiasr-由nvidia开发的超高速超分算法" aria-hidden="true">#</a> <strong>NvidiaSR</strong> (由NVIDIA开发的超高速超分算法)</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该算法仅在赞助版中可用</p></div>',14),K={href:"https://www.nvidia.cn/geforce/broadcasting/broadcast-sdk/resources/",target:"_blank",rel:"noopener noreferrer"},Q=i('<p>带AR字样的模型有降噪除色带的功能，其余模型仅放大</p><p>带超分强度选项，该值越大，超分强度越大，反之越小(取值范围 0 ### 1)</p><h3 id="basicvsrplusplus-实拍超分算法-效果依赖超分序列长度" tabindex="-1"><a class="header-anchor" href="#basicvsrplusplus-实拍超分算法-效果依赖超分序列长度" aria-hidden="true">#</a> <strong>BasicVSRPlusPlus</strong> (实拍超分算法,效果依赖超分序列长度)</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该算法仅在专业版DLC的公测Beta版本中可用，需要手动前往Steam设置-测试版中选择</p></div><ul><li><p>basicvsrpp_reds_4x 在reds数据集上训练的超分模型</p></li><li><p>basicvsrpp_vimeo_bd_4x 在vimeo bd数据集上训练的超分模型</p></li><li><p>basicvsrpp_vimeo_bi_4x 在vimeo bi数据集上训练的超分模型</p></li></ul><h3 id="basicvsrplusplusrestore-实拍超分算法-效果依赖超分序列长度" tabindex="-1"><a class="header-anchor" href="#basicvsrplusplusrestore-实拍超分算法-效果依赖超分序列长度" aria-hidden="true">#</a> <strong>BasicVSRPlusPlusRestore</strong> (实拍超分算法,效果依赖超分序列长度)</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该算法仅在公测Beta版本中可用</p></div><ul><li><p>basicvsrpp_deblur_dvd_max_4x 去模糊四倍放大模型(在dvd素材上表现较好)</p></li><li><p>basicvsrpp_deblur_gopro_max_4x 去模糊四倍放大模型(在摄影素材上表现较好)</p></li><li><p>basicvsrpp_denoise_max_4x 四倍放大降噪模型</p></li><li><p>basicvsrpp_ntire_t1_decompress_max_4x 四倍放大去压缩模型t1</p></li><li><p>basicvsrpp_ntire_t2_decompress_max_4x 四倍放大去压缩模型t2</p></li><li><p>basicvsrpp_ntire_t3_decompress_max_4x 四倍放大去压缩模型t3（推荐使用）</p></li><li><p>basicvsrpp_ntire_t3_decompress_max_4x_trt 四倍放大去压缩模型t3 (TensorRT加速)</p></li></ul><h3 id="purebasicvsr-实拍超分算法-效果依赖超分序列长度" tabindex="-1"><a class="header-anchor" href="#purebasicvsr-实拍超分算法-效果依赖超分序列长度" aria-hidden="true">#</a> <strong>PureBasicVSR</strong> (实拍超分算法,效果依赖超分序列长度)</h3><ul><li><p>RealBasicVSR_4x 基本四倍放大模型</p></li><li><p>reds_wogan_x4 在reds数据集上训练的四倍放大模型(不使用gan)</p></li><li><p>reds_x4 在reds数据集上训练的四倍放大模型</p></li></ul><h3 id="realbasicvsr-实拍超分算法-效果依赖超分序列长度" tabindex="-1"><a class="header-anchor" href="#realbasicvsr-实拍超分算法-效果依赖超分序列长度" aria-hidden="true">#</a> <strong>RealBasicVSR</strong> (实拍超分算法,效果依赖超分序列长度)</h3><p>realbasicvsr_reds_4x 在reds数据集上训练的四倍放大模型</p><h3 id="ftvsr-实拍超分算法-效果依赖超分序列长度" tabindex="-1"><a class="header-anchor" href="#ftvsr-实拍超分算法-效果依赖超分序列长度" aria-hidden="true">#</a> <strong>FTVSR</strong> (实拍超分算法,效果依赖超分序列长度)</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该算法仅在公测Beta版本中可用</p></div><ul><li><p>ftvsr_reds_4x 在reds数据集上训练的四倍放大模型</p></li><li><p>ftvsr_vimeo_4x 在vimeo数据集上训练的四倍放大模型</p></li></ul><h3 id="anime4k-超高速实时动漫超分算法-较保守" tabindex="-1"><a class="header-anchor" href="#anime4k-超高速实时动漫超分算法-较保守" aria-hidden="true">#</a> <strong>Anime4K</strong> (超高速实时动漫超分算法, 较保守)</h3><p>我们为用户准备了6种预设脚本</p><ul><li><p>Anime4K_Upscale_x2 A/B/C/D 均为2倍放大（默认选A）</p></li><li><p>Anime4K_Upscale_x3 为3倍放大，x4模型类似</p></li></ul><h3 id="waifu2x-经典保守超分算法" tabindex="-1"><a class="header-anchor" href="#waifu2x-经典保守超分算法" aria-hidden="true">#</a> <strong>waifu2x</strong> (经典保守超分算法)</h3><ul><li><p>cunet模型用于动漫超分</p></li><li><p>photo模型用于实拍</p></li><li><p>anime用于动漫超分</p></li></ul><h3 id="tensorrt-对以上部分超分算法的超快加速" tabindex="-1"><a class="header-anchor" href="#tensorrt-对以上部分超分算法的超快加速" aria-hidden="true">#</a> <strong>TensorRT</strong> (对以上部分超分算法的超快加速)</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该算法仅在公测Beta版本中可用</p></div><ul><li><p>具有cugan的全部模型加速</p></li><li><p>real-animevideov3 为RealESR中专门为动漫视频超分准备的模型</p></li><li><p>RealESRGANv2-animevideo-xsx2 两倍动漫视频超分放大模型</p></li><li><p>RealESRGANv2-animevideo-xsx4 四倍动漫视频超分放大模型</p></li></ul><h3 id="负载显卡" tabindex="-1"><a class="header-anchor" href="#负载显卡" aria-hidden="true">#</a> 负载显卡</h3><p>指定使用哪一张显卡进行超分</p><h3 id="超分算法" tabindex="-1"><a class="header-anchor" href="#超分算法" aria-hidden="true">#</a> 超分算法</h3><p>选择超分使用的算法</p><h3 id="超分模型倍数" tabindex="-1"><a class="header-anchor" href="#超分模型倍数" aria-hidden="true">#</a> 超分模型倍数</h3><p>当前选择的模型的超分倍数</p><h3 id="转移分辨率比" tabindex="-1"><a class="header-anchor" href="#转移分辨率比" aria-hidden="true">#</a> 转移分辨率比</h3><p>先按用户设置的百分比缩放原视频,之后再进行超分。</p><blockquote><p>例:原视频1920x1080，转移分辨率比50%， 模型放大倍数4x</p></blockquote><p>运行过程: 1920x1080 -&gt; 960x540(下缩放) -&gt;3840x2160(超分辨率)</p><h3 id="realcugan切割模式" tabindex="-1"><a class="header-anchor" href="#realcugan切割模式" aria-hidden="true">#</a> RealCUGAN切割模式</h3><p>realCUGAN专用，切的越多越节省显存</p><ul><li><p>No Tile:不使用切割</p></li><li><p>1/2 on Width: 横向一分为二</p></li><li><p>1/2 on both W and H: 横纵各一分为二</p></li><li><p>1/3 on w &amp; h: 横纵各切三份</p></li><li><p>1/4 on w &amp; h: 横纵各切四份</p></li></ul><h3 id="realcugan低显存模式" tabindex="-1"><a class="header-anchor" href="#realcugan低显存模式" aria-hidden="true">#</a> RealCUGAN低显存模式</h3><p>realCUGAN专用，显卡显存不足时使用</p><ul><li><p>Low VRAM Mode: 启用低显存模式</p></li><li><p>None: 不使用低显存模式</p></li></ul><h3 id="切割块大小-使用realcugan时不建议开启" tabindex="-1"><a class="header-anchor" href="#切割块大小-使用realcugan时不建议开启" aria-hidden="true">#</a> 切割块大小(使用realCUGAN时不建议开启)</h3><ul><li>有为显存大小制定的预设，也可以选择自定义调节</li></ul><h3 id="超分序列长度" tabindex="-1"><a class="header-anchor" href="#超分序列长度" aria-hidden="true">#</a> 超分序列长度</h3><p>仅当选择BasicVSR系列等需要多帧输入的超分算法时有效</p><ul><li>超分序列长度越大，单次超分输入的帧就越多，纹理越稳定，但同时会增大显存占用,</li><li>建议该值保持10以上，如果显存不足建议降低画面分辨率并保证该值在5以上</li></ul><div align="center"><img src="'+N+'" width="300"></div><h3 id="超分使用半精度" tabindex="-1"><a class="header-anchor" href="#超分使用半精度" aria-hidden="true">#</a> 超分使用半精度</h3><ul><li>推荐开启，可大幅度减小显存占用，对画面质量影响较小。</li><li>对于nVidia家10xx系列Pascal架构的显卡会减慢超分速度</li></ul><h3 id="tta" tabindex="-1"><a class="header-anchor" href="#tta" aria-hidden="true">#</a> TTA</h3><p>仅ncnnCUGAN支持，以大量时间消耗换取画质的小幅度提升</p><h3 id="fmnet-hdr10" tabindex="-1"><a class="header-anchor" href="#fmnet-hdr10" aria-hidden="true">#</a> FMNet - HDR10</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该功能仅在公测Beta版本中可用</p></div><p>使用AI算法将SDR视频转换为HDR10</p><h2 id="输出设置-压制参数质量" tabindex="-1"><a class="header-anchor" href="#输出设置-压制参数质量" aria-hidden="true">#</a> 输出设置（压制参数质量）</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>仅进行超分辨率请点击一键压制开始任务;<br> 若要使补帧超分同时进行，请点击一键补帧</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>同时进行补帧超分会消耗更多显存，显存不足可能会导致任务失败。</p><p>若显存少于10G，建议先使用一键压制完成超分，再进行补帧。</p></div><div align="center"><img src="'+S+'" width="840"></div><h3 id="渲染质量crf" tabindex="-1"><a class="header-anchor" href="#渲染质量crf" aria-hidden="true">#</a> 渲染质量CRF</h3><p>用于调整视频导出时的质量亏损， 与<strong>输出码率呈正相关</strong>。使用不同压制编码和压制预设均会对CRF产生影响。</p><p><strong>CRF数值参数一般为16</strong>，此时肉眼无损；对于H.265编码，码率会有明显下降。<strong>请以肉眼所见画面质量来评定CRF数值大小是否合理。</strong><br> 如果是作为<strong>收藏CRF数值参数可设为12</strong>。<strong>CRF的数值越小，操作过程之后对画面损失就越小，同时导出的成品视频体积（码率）越大。</strong></p><p><strong>注意：相同数值，不同编码器的输出质量不同</strong></p><h3 id="目标码率" tabindex="-1"><a class="header-anchor" href="#目标码率" aria-hidden="true">#</a> 目标码率</h3><p>作为替代渲染质量CRF的可选项，和Primier Pro，After Effects，DaVinci Resolve的设置标准基本相同</p><h3 id="编码器" tabindex="-1"><a class="header-anchor" href="#编码器" aria-hidden="true">#</a> 编码器</h3><ul><li><strong>AUTO</strong><br> 根据软件下方的滑动条自动决定编码器选项</li><li><strong>CPU</strong><br> 选择此项压制，<strong>质量最高，但CPU占用率也最高</strong>。<strong>CPU的性能优劣</strong>决定补帧或超分过程中是否会阻塞（导致显卡占用下降），以及最后操作完成的<strong>时间长短</strong>。</li><li><strong>NVENC</strong><br> 此项仅供<strong>支持NVENC功能的NVIDIA显卡</strong>选用，如果您的显卡并<strong>不支持NVENC功能请不要选择此项</strong>。<br> 请自行查阅安装目录下的NVIDIA NVENC Gen.pdf查阅自己的显卡是否支持NVENC</li><li><strong>VCE</strong><br> 此项仅<strong>供支持VCE功能的AMD显卡</strong>选用，如果您的显卡并<strong>不支持VCE功能请不要选择此项</strong>。</li><li><strong>QSV</strong><br> 此项仅支持有<strong>Intel核显</strong>的用户选用(例如Intel UHD 630、IrisPro 580)，非此类用户不要选用。</li></ul>',64),y={class:"hint-container tip"},O=a("p",{class:"hint-container-title"},"提示",-1),W={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},X=i('<ul><li><strong>NVENCC</strong>为<strong>NVENC</strong>的优化版本，处理速度更快，作品质量更好。</li><li><strong>QSVENCC</strong>为<strong>QSV</strong>的优化版本，完成任务的效率更高。</li><li><strong>VCENCC</strong>为<strong>VCE</strong>的优化版本，完成任务的效率更高。</li></ul><p>感性对比：</p><table><thead><tr><th>编码器</th><th>使用硬件</th><th>速度</th><th>质量</th><th>文件大小</th><th>选择建议</th></tr></thead><tbody><tr><td>CPU</td><td>CPU</td><td>中</td><td>高</td><td>中</td><td>追求画质和编码稳定性以及A卡用户AU用户选择</td></tr><tr><td>NVENC</td><td>N卡</td><td>快</td><td>中</td><td>大</td><td>追求速度和质量并重，对大小不太敏感的用户选择</td></tr><tr><td>QSV</td><td>Intel核显</td><td>快</td><td>中</td><td>大</td><td>追求速度和质量并重，对大小不太敏感的用户选择</td></tr></tbody></table><h3 id="选择压制编码" tabindex="-1"><a class="header-anchor" href="#选择压制编码" aria-hidden="true">#</a> 选择压制编码</h3><p>对于此项功能的选择，需要您具备一定的<strong>视频压制常识</strong>。</p><div class="hint-container warning"><p class="hint-container-title">如您不熟悉压制，请您谨记以下规则：</p><ul><li>HDR输出务必选择<strong>H.265 10bit</strong>编码</li><li>2K以上分辨率务必选择 <strong>H.265</strong> 编码（尤其是4K，8K分辨率）</li><li>如果H.264、H.265编码均出现问题，使用<strong>ProRes</strong>编码。此编码输出最贴近肉眼无损，码率极大，是用于剪辑工作的中间编码格式。</li><li>推荐使用H.265 fast编码或ProRes编码</li></ul></div><h3 id="选择压制预设" tabindex="-1"><a class="header-anchor" href="#选择压制预设" aria-hidden="true">#</a> 选择压制预设</h3><ul><li><p>CPU: 英文含义<strong>速度越快的作品质量越低，反之质量越高</strong>。</p></li><li><p>NVENC(N卡专用): 建议无脑选p7</p></li><li><p>QSV(Intel显卡专用): 直接选slow</p></li><li><p>VCE(A卡专用): 直接选quality</p></li><li><p>NVENCC(N卡专用): 直接选quality</p></li><li><p>QSVENCC(Intel显卡专用): 直接选best</p></li><li><p>VCENCC(A卡专用): 直接选slow</p></li></ul><h3 id="n卡硬编预设" tabindex="-1"><a class="header-anchor" href="#n卡硬编预设" aria-hidden="true">#</a> N卡硬编预设</h3><p>选择NVENC编码器时, N卡硬编预设可在画面质量不变的情况下，缩小导出视频体积，需要查询自己的N卡是第几代NVENC压制芯片，超过7th直接选7th+</p><h3 id="默认压制方案" tabindex="-1"><a class="header-anchor" href="#默认压制方案" aria-hidden="true">#</a> 默认压制方案</h3><p>使用传统的压制方案, 兼容性强, 导出视频体积可能会增大。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>启用此功能可以解决大多数broken pipe问题。</p></div><h3 id="音频二压为aac" tabindex="-1"><a class="header-anchor" href="#音频二压为aac" aria-hidden="true">#</a> 音频二压为AAC</h3><ul><li>对音频进行重编码(一般在上传平台的视频上用)</li><li>将视频中的所有音频轨道压制为<strong>640kbps的aac格式</strong>。</li></ul><h3 id="hdr严格模式" tabindex="-1"><a class="header-anchor" href="#hdr严格模式" aria-hidden="true">#</a> HDR严格模式</h3><p>用严格预设处理HDR内容,默认开启即可</p><h3 id="dv兼容hdr10" tabindex="-1"><a class="header-anchor" href="#dv兼容hdr10" aria-hidden="true">#</a> DV兼容HDR10</h3><p>在杜比视界输出时启用HDR10兼容,默认开启即可</p><h3 id="一键hdr-将sdr视频转换为hdr10" tabindex="-1"><a class="header-anchor" href="#一键hdr-将sdr视频转换为hdr10" aria-hidden="true">#</a> 一键HDR: 将SDR视频转换为HDR10+</h3><p>四种一键HDR模式需要自行尝试效果</p><h2 id="解码质量控制" tabindex="-1"><a class="header-anchor" href="#解码质量控制" aria-hidden="true">#</a> 解码质量控制</h2><h3 id="使用vspipe前置解码" tabindex="-1"><a class="header-anchor" href="#使用vspipe前置解码" aria-hidden="true">#</a> 使用vspipe前置解码</h3><p>使用vspipe作为前置解码,此功能是许多特定功能(例如去色块,快速添噪,QTGMC去隔行)的前提条件,</p><p>如果您发现他无法解码输入或任务报错，请关闭它</p><h3 id="硬件解码" tabindex="-1"><a class="header-anchor" href="#硬件解码" aria-hidden="true">#</a> 硬件解码</h3><p>可以减轻大分辨率视频解码压力，但可能会在一定程度上<strong>降低画面质量</strong>，并在显存紧张时导致补帧模块<strong>爆显存</strong>。</p><h3 id="快速拆帧" tabindex="-1"><a class="header-anchor" href="#快速拆帧" aria-hidden="true">#</a> 快速拆帧</h3><p>快速拆帧操作可以<strong>减轻解码压力</strong>，但可能会<strong>导致画面色彩出现偏差</strong>。</p><h3 id="高精度优化工作流" tabindex="-1"><a class="header-anchor" href="#高精度优化工作流" aria-hidden="true">#</a> 高精度优化工作流</h3>',30),$={class:"hint-container tip"},j=a("p",{class:"hint-container-title"},"提示",-1),z={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},J=i('<ul><li>若CPU性能过剩，建议您开启此项功能，可<strong>解决多数画面颜色偏差问题</strong>，并可最大程度解决HDR视频压制产生的色偏问题。此功能会<strong>加大CPU负担</strong>，甚至影响补帧速度。</li><li>超分工作开启此功能将会<strong>关闭半精度</strong>(所需要的显存更大)。请您<strong>酌情选择</strong>。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>建议在输入HDR视频时开启此选项</p></div><h3 id="开启反交错" tabindex="-1"><a class="header-anchor" href="#开启反交错" aria-hidden="true">#</a> 开启反交错</h3>',3),Y={class:"hint-container tip"},Z=a("p",{class:"hint-container-title"},"提示",-1),aa={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},ea=i('<ul><li><p>使用<strong>ffmpeg</strong>对输入的<strong>交错视频</strong>进行反交错处理。</p></li><li><p>当使用vspipe前置解码时,使用QTGMC反交错处理画面</p></li></ul><h3 id="depan-去色带" tabindex="-1"><a class="header-anchor" href="#depan-去色带" aria-hidden="true">#</a> DePan (去色带)</h3><p>使用vs中的depanStabilise来处理色带</p><h3 id="快速降噪" tabindex="-1"><a class="header-anchor" href="#快速降噪" aria-hidden="true">#</a> 快速降噪</h3>',4),ra={class:"hint-container tip"},ia=a("p",{class:"hint-container-title"},"提示",-1),ta={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},na=i('<p>此栏目下的“快速”选项如果不是特殊需要，请保持关闭，否则会<strong>减缓任务处理速度</strong>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>推荐自行控制变量试验此选项是否对画面质量提升有帮助。</p><p>与高精度优化工作流不兼容</p></div><h3 id="快速添噪" tabindex="-1"><a class="header-anchor" href="#快速添噪" aria-hidden="true">#</a> 快速添噪</h3><p>为视频添加噪点,常用于视频超分时</p><h3 id="自定义拆帧参数-专业选项" tabindex="-1"><a class="header-anchor" href="#自定义拆帧参数-专业选项" aria-hidden="true">#</a> 自定义拆帧参数 (专业选项)</h3><p>用于替换ffmpeg或vspipe用于解码的参数，自定义参数之间用||间隔</p><h2 id="自定义编码设置" tabindex="-1"><a class="header-anchor" href="#自定义编码设置" aria-hidden="true">#</a> 自定义编码设置</h2><h3 id="指定编码线程数" tabindex="-1"><a class="header-anchor" href="#指定编码线程数" aria-hidden="true">#</a> 指定编码线程数</h3><p>编码器为CPU时，有几率控制CPU占用率以控制渲染速度 。</p><h3 id="自定义压制参数" tabindex="-1"><a class="header-anchor" href="#自定义压制参数" aria-hidden="true">#</a> 自定义压制参数</h3><p>此功能为专业选项（注意输入项数必须为<strong>偶数</strong>），</p><p>键值之间用<code>||</code>分隔</p><blockquote><p>例：CPU h265压制时自定义压制参数：</p><p>-x265-params||ref=4:me=3:subme=4:rd=4:merange=38:rdoq-level=2:rc-lookahead=40:scenecut=40:strong-intra-smoothing=0</p></blockquote><h3 id="时间重映射-改变视频的速度" tabindex="-1"><a class="header-anchor" href="#时间重映射-改变视频的速度" aria-hidden="true">#</a> 时间重映射: 改变视频的速度</h3>',14),sa={class:"hint-container tip"},da=a("p",{class:"hint-container-title"},"提示",-1),ha={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},oa=i('<ul><li><p>此功能用于制作“慢动作”素材。</p></li><li><p>例如设置输出帧率为120帧，时间重映射设置为60帧，输出效果等同于50%<strong>播放速度慢放</strong>。</p></li><li><p>其他情况依次类推，您可以自己设置输出帧率，<strong>支持小数</strong>。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>动漫素材请尽可能在<strong>补帧设置</strong>的<strong>视频流畅度优化</strong>中开启<strong>时空重采样</strong>。</p><p>或者用Premiere等软件降低原视频的帧率来完成重复帧的去除，以避免重映射后卡顿。</p><p>原视频帧率一般降低到8或12帧</p></div><h3 id="首尾循环" tabindex="-1"><a class="header-anchor" href="#首尾循环" aria-hidden="true">#</a> 首尾循环</h3><p>在第一帧放入最后一帧以适配一些首尾相连的循环视频</p><h2 id="io控制" tabindex="-1"><a class="header-anchor" href="#io控制" aria-hidden="true">#</a> IO控制</h2><div align="center"><img src="'+V+'" width="828"></div><h3 id="手动指定缓冲区内存大小" tabindex="-1"><a class="header-anchor" href="#手动指定缓冲区内存大小" aria-hidden="true">#</a> 手动指定缓冲区内存大小</h3><p>若运行内存紧张（16G以下），建议<strong>手动指定缓冲区内存的大小</strong>为2-3G避免**爆内存(out of memory)**错误。</p><h3 id="单一输出区块大小" tabindex="-1"><a class="header-anchor" href="#单一输出区块大小" aria-hidden="true">#</a> 单一输出区块大小</h3><ul><li>对于补帧和压制任务，每渲染数量为该值的帧，将输出一个不带音频的小片段，以方便您<strong>预览效果</strong>。</li><li>片段会生成在您设置的输出文件夹中，<strong>并在补帧或压制任务完成后合并为一个文件</strong>。</li></ul><h3 id="任务完成后保留项目文件夹" tabindex="-1"><a class="header-anchor" href="#任务完成后保留项目文件夹" aria-hidden="true">#</a> 任务完成后保留项目文件夹</h3><p>补帧完成后<strong>不删除中间生成的chunk视频</strong>。</p><h2 id="补帧设置" tabindex="-1"><a class="header-anchor" href="#补帧设置" aria-hidden="true">#</a> 补帧设置</h2><h3 id="安全帧率" tabindex="-1"><a class="header-anchor" href="#安全帧率" aria-hidden="true">#</a> <strong>安全帧率</strong></h3><p>如果视频要上传到相应媒体平台上在线观看，请开启此项</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若播放视频时发现视频花屏，极有可能是解码器的问题，请尝试更换解码器或勾选此选项以降低解码压力。</p></div><h3 id="反向光流" tabindex="-1"><a class="header-anchor" href="#反向光流" aria-hidden="true">#</a> <strong>反向光流</strong></h3><p>该功能可使画面在一定程度上<strong>更加丝滑</strong>。</p><h3 id="绝对流畅" tabindex="-1"><a class="header-anchor" href="#绝对流畅" aria-hidden="true">#</a> <strong>绝对流畅</strong></h3><p>该功能可能使画面<strong>更加丝滑</strong>，默认开启就行(不可用时软件运行时不会启用)</p><h3 id="光流尺度" tabindex="-1"><a class="header-anchor" href="#光流尺度" aria-hidden="true">#</a> <strong>光流尺度</strong></h3><ul><li><p>使用RIFE算法时 原视频尺寸为1080P时，默认开0.5，4K以及以上开0.25，小于1080P开1.0</p></li><li><p>使用GMFSS算法时，原视频尺寸为1080P时，默认开1.0,4K及以上开0.5，小于1080P也开1.0</p></li></ul><h3 id="交错补帧" tabindex="-1"><a class="header-anchor" href="#交错补帧" aria-hidden="true">#</a> <strong>交错补帧</strong></h3><ul><li><p>相当于特殊的切割，用于减少显存占用</p></li><li><p>恰当选择此项可以让小显存显卡补超大分辨率（如4G补8K）</p></li></ul><h3 id="视频流畅度优化" tabindex="-1"><a class="header-anchor" href="#视频流畅度优化" aria-hidden="true">#</a> 视频流畅度优化</h3><ul><li><strong>时空线性化</strong>: 当输出帧率为60时增强画面的流畅度（TruMotion）<strong>( 通用 )</strong></li><li><strong>固定阈值去重</strong>: 用于缓解重复帧造成的<strong>画面卡顿感</strong>，一般通用值为0.2，动漫时使用0.5，1.0或更高 <strong>( 通用 )</strong></li><li><strong>去除一拍二</strong>：动漫专用，部分素材表现较好，但多数情况下无法彻底的除去重复帧，容易引入卡顿。<strong>( 动漫 ) ( 已过时,建议使用时空重采样 )</strong></li><li><strong>时空重采样</strong>: 完全去除动漫视频素材的卡顿，输入帧率请保证在24左右，输出帧率只能成 (输入帧率/2的) 整数倍 **( 动漫 ) ( 仅支持任意时刻补帧的算法与补帧模型可用 ) **</li><li><strong>一阶差分去重</strong>: 动漫除重 <strong>( 已过时 )</strong></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于现阶段AI补帧在动漫补帧方面能力有限，选择去重将加大帧间运动幅度，导致补帧时产生画面扭曲，请自行对于每个输入视频控制变量多次试验选择最好的除重模式。</p><p>建议您谨慎选择去重模式，如果对动漫全片进行补帧，不建议开启去除重复帧。</p></div><p><strong>开启视频流畅度优化后(时空重采样)补帧效果如下</strong></p><div align="center"><img src="'+h+'" width="1920"></div><div align="center"><img src="'+o+'" width="1920"></div><h3 id="负载显卡-1" tabindex="-1"><a class="header-anchor" href="#负载显卡-1" aria-hidden="true">#</a> <strong>负载显卡</strong></h3><p>指定使用哪张显卡进行补帧</p><h3 id="补帧算法" tabindex="-1"><a class="header-anchor" href="#补帧算法" aria-hidden="true">#</a> 补帧算法</h3><p>选择使用的补帧算法(包括RIFE,IFRNet,DAIN,GMFSS,EMA)</p><h3 id="补帧模型" tabindex="-1"><a class="header-anchor" href="#补帧模型" aria-hidden="true">#</a> <strong>补帧模型</strong></h3>',35),pa={class:"hint-container tip"},la=a("p",{class:"hint-container-title"},"提示",-1),ca=a("code",null,"ncnn",-1),ga={href:"https://github.com/Tencent/ncnn",target:"_blank",rel:"noopener noreferrer"},ua=i('<ul><li>RIFE：高速，热门的新时代补帧算法 (以下为模型介绍)</li></ul><blockquote><p>2.3: 经典，热门模型，速度快，效果好。</p><p>3.8: (一定要开双向光流), 质量较好，清晰。</p><p>4.4: 质量略差，速度超快。</p><p>4.5: 质量接近，甚至超越2.3，流畅度更高，速度较快。</p><p>4.6: 4.5模型的进化版，推荐使用。</p><p>rpr_v7_1.0: 组合模型，模糊，有流畅度提升。</p><p>rpr_v7_2.3: 组合模型，有流畅度提升。</p><p>rpr_v7_2.3_ultra: 组合模型，更能适应复杂画面。</p><p>rpr_v7_2.3_ultra#2: 组合模型，更能适应复杂画面。</p></blockquote><ul><li><p>ncnn-rife：支持各种显卡版本的RIFE，兼容性好，速度快，质量比RIFE略差。</p></li><li><p>IFRNet：实拍&amp;动漫模型， 速度较快，质量相对RIFE模型较差，不建议使用。</p></li><li><p>ncnn_dain：传统老算法，动漫实拍均可用，支持任意时刻，速度很慢，流畅度很高。</p></li><li><p>GMFSS：实验性新算法，速度慢，质量高(以下为模型介绍)(带trt标记的模型为加速模型)</p></li></ul><blockquote><p>union_v: 第三代GMFSS模型,目前最强大的动漫补帧模型,结构稳定,画面流畅</p><p>union_w: 第三代GMFSS模型,目前最强大的动漫补帧模型,画面清晰,干净</p><p>pg104: 第四代gmfss动漫模型 (实验效果比union_v更好)</p><p>real: gmfss第二代实拍模型</p><p>primaris: gmfss第二代动漫模型</p><p>up: 第一代gmfss模型,速度很快，文字可能会出现闪烁</p><p>basic: 第一代gmfss模型,速度非常慢，效果可能比up稳定</p></blockquote><ul><li>EMA：CVPR 2023 SOTA实拍补帧算法</li></ul><blockquote><p>ema_ours_t 官方给出的支持任意时刻的满血模型</p><p>ema_outs 官方给出的满血模型</p><p>ema_ours_small_t 官方给出的支持任意时刻的快速模型</p><p>ema_outs_small 官方给出的快速模型</p></blockquote><h3 id="tta模式" tabindex="-1"><a class="header-anchor" href="#tta模式" aria-hidden="true">#</a> <strong>TTA模式</strong></h3>',7),_a={class:"hint-container tip"},ba=a("p",{class:"hint-container-title"},"提示",-1),fa={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},xa=i('<blockquote><p>开启该功能可以<strong>减少画面果冻，减小字幕抖动，减弱物体消失的问题</strong>。使得画面更加<strong>平滑舒适</strong></p><p><strong>需要额外消耗补帧时间，同时部分补帧模型不支持此功能</strong>。</p><p>后面的数字填的越大越慢，果冻越少，一般填1或者2就行了</p><p>侧向，适合rife，3.x系列模型</p><p>中向，适合rife，2.x系列模型</p></blockquote><h3 id="输出层微调模式-仅实验性模型可使用" tabindex="-1"><a class="header-anchor" href="#输出层微调模式-仅实验性模型可使用" aria-hidden="true">#</a> 输出层微调模式 (仅实验性模型可使用)</h3><blockquote><p>residual: 会让画面模糊一些，但结构更完整</p><p>direct: 直接输出，画面清晰些</p></blockquote><h3 id="双向光流" tabindex="-1"><a class="header-anchor" href="#双向光流" aria-hidden="true">#</a> <strong>双向光流</strong></h3><blockquote><p>速度降低一半左右，效果有些许提升(rife 3.8模型一定要开)(rife 4.x模型暂不支持)。</p></blockquote><h3 id="动态光流尺度" tabindex="-1"><a class="header-anchor" href="#动态光流尺度" aria-hidden="true">#</a> <strong>动态光流尺度</strong></h3>',6),va={class:"hint-container tip"},ma=a("p",{class:"hint-container-title"},"提示",-1),Ca={href:"https://store.steampowered.com/app/1718750/SVFI_Professional/",target:"_blank",rel:"noopener noreferrer"},Ra=i('<blockquote><p>在补帧过程中动态选择光流尺度，可减少物体消失问题以及减少果冻，建议开启。</p></blockquote><h2 id="自定义预设栏" tabindex="-1"><a class="header-anchor" href="#自定义预设栏" aria-hidden="true">#</a> 自定义预设栏</h2><h3 id="基于当前设置新建预设" tabindex="-1"><a class="header-anchor" href="#基于当前设置新建预设" aria-hidden="true">#</a> 基于当前设置新建预设</h3><p>在给预设取个名字之后点击即可新建预设</p><h3 id="移除当前预设" tabindex="-1"><a class="header-anchor" href="#移除当前预设" aria-hidden="true">#</a> 移除当前预设</h3><p>删除当前选中的预设</p><h3 id="应用指定预设" tabindex="-1"><a class="header-anchor" href="#应用指定预设" aria-hidden="true">#</a> 应用指定预设</h3><p>加载之前保存的预设，自动载入参数</p><h2 id="工具箱" tabindex="-1"><a class="header-anchor" href="#工具箱" aria-hidden="true">#</a> 工具箱</h2><h3 id="视频转换-gif-动图" tabindex="-1"><a class="header-anchor" href="#视频转换-gif-动图" aria-hidden="true">#</a> 视频转换 GIF 动图</h3><p>生成高质量的 GIF 动图</p><h3 id="循环动图" tabindex="-1"><a class="header-anchor" href="#循环动图" aria-hidden="true">#</a> 循环动图</h3><p>生成循环的动图，建议保持默认。</p><h3 id="合并已有区块" tabindex="-1"><a class="header-anchor" href="#合并已有区块" aria-hidden="true">#</a> 合并已有区块</h3><p>将散落的chunk片段合并。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若任务在最后的合并期间失败，可以在调整设置后直接选中任务并点击此按钮完成合并操作。</p></div><h3 id="音视频合并" tabindex="-1"><a class="header-anchor" href="#音视频合并" aria-hidden="true">#</a> 音视频合并</h3><ul><li><p>填入视频的完整路径(例:D:\\01\\myvideo.mp4)</p></li><li><p>填入视频的音频路径(例:D:\\01\\myvideo.aac)</p></li><li><p>或者使用一个视频来输入音频(例:D:\\01\\otherVideo.mp4)</p></li><li><p>输出视频路径(例:D:\\01\\output.mp4)</p></li></ul><h3 id="导出当前设置到文本文档" tabindex="-1"><a class="header-anchor" href="#导出当前设置到文本文档" aria-hidden="true">#</a> 导出当前设置到文本文档</h3><p>导出设置信息为文本文档。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若软件视频输出不符合预期，如存在偏色，效果不好等情况，可点击此按钮并将设置文件发送给开发者以定位问题。</p></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> Debug</h3><p>在任务进行时输出调试信息</p><h1 id="标题栏功能" tabindex="-1"><a class="header-anchor" href="#标题栏功能" aria-hidden="true">#</a> 标题栏功能</h1><div align="center"><img src="'+A+'" width="300"></div><h2 id="偏好设置" tabindex="-1"><a class="header-anchor" href="#偏好设置" aria-hidden="true">#</a> 偏好设置</h2><h3 id="多任务休息间隔" tabindex="-1"><a class="header-anchor" href="#多任务休息间隔" aria-hidden="true">#</a> 多任务休息间隔</h3><p>每隔 X 小时让设备休息一下（短暂暂停任务）</p><h3 id="选择缓存文件夹" tabindex="-1"><a class="header-anchor" href="#选择缓存文件夹" aria-hidden="true">#</a> 选择缓存文件夹</h3><p>将任务文件夹指定到其他位置。最终输出视频将仍在目标文件夹</p><h3 id="补帧任务完成后" tabindex="-1"><a class="header-anchor" href="#补帧任务完成后" aria-hidden="true">#</a> 补帧任务完成后</h3><p>可以选择一些补帧完成后的自动操作</p><h3 id="不可用功能" tabindex="-1"><a class="header-anchor" href="#不可用功能" aria-hidden="true">#</a> 不可用功能</h3><p>强制使用 CPU 进行补帧超分</p><h3 id="开启专家模式" tabindex="-1"><a class="header-anchor" href="#开启专家模式" aria-hidden="true">#</a> 开启专家模式</h3><p>默认开启,显示全部功能</p><h3 id="开启任务前参数文本预览" tabindex="-1"><a class="header-anchor" href="#开启任务前参数文本预览" aria-hidden="true">#</a> 开启任务前参数文本预览</h3><p>点击启动补帧之前会先弹出弹框，可以浏览一遍确定参数设置正确后进行补帧或超分</p><h3 id="任务完成后清空任务列表" tabindex="-1"><a class="header-anchor" href="#任务完成后清空任务列表" aria-hidden="true">#</a> 任务完成后清空任务列表</h3><p>列表中所有任务完成后清理队列</p><h3 id="使用全局设置" tabindex="-1"><a class="header-anchor" href="#使用全局设置" aria-hidden="true">#</a> 使用全局设置</h3><p>对所有任务进行统一参数设置</p><h3 id="鲁莽的退出" tabindex="-1"><a class="header-anchor" href="#鲁莽的退出" aria-hidden="true">#</a> 鲁莽的退出</h3><p>默认开启，强制结束软件进程</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若关闭软件后发现扔存在显存占用则建议开启此项</p></div><h3 id="原味压制模式" tabindex="-1"><a class="header-anchor" href="#原味压制模式" aria-hidden="true">#</a> 原味压制模式</h3><p>单独对任务进行压制时，不开启重复帧去重等操作</p><h3 id="开启预览" tabindex="-1"><a class="header-anchor" href="#开启预览" aria-hidden="true">#</a> 开启预览</h3><p>补帧时开启预览窗口，会一定程度上降低程序运行速度</p><h3 id="自动纠错" tabindex="-1"><a class="header-anchor" href="#自动纠错" aria-hidden="true">#</a> 自动纠错</h3><p>自动修改设置来防止任务报错</p><h3 id="开启安静模式" tabindex="-1"><a class="header-anchor" href="#开启安静模式" aria-hidden="true">#</a> 开启安静模式</h3><p>软件启动时不弹出提示框</p>',53);function Na(Sa,Va){const n=s("Badge"),t=s("ExternalLinkIcon");return l(),c("div",null,[w,a("blockquote",null,[a("p",null,[e("例：视频"),r(n,{text:"注"}),e("分辨率3840x2160, 实际画面分辨率3840x1620, 则在此处的"),D,e("填"),G,e("。")])]),r(n,{text:"注",vertical:"middle"}),e(": 若使用AI超分, 则这里的视频指最终的输出视频"),I,a("div",E,[U,a("p",null,[e("此功能需购买"),a("a",P,[e("专业版DLC"),r(t)])])]),F,a("ul",null,[q,a("li",null,[a("p",null,[e("pro模型为增强版(具体看官方介绍ailab/Real-CUGAN at main · bilibili/ailab ("),a("a",H,[e("github.com"),r(t)]),e("))")])]),B,T,M]),L,a("p",null,[e("该算法需要预先根据自己的N卡版本安装"),a("a",K,[e("NVIDIA Broadcast软件中的视频效果功能"),r(t)])]),Q,a("div",y,[O,a("p",null,[e("以下编码器需购买"),a("a",W,[e("专业版DLC"),r(t)])])]),X,a("div",$,[j,a("p",null,[e("此功能需购买"),a("a",z,[e("专业版DLC"),r(t)])])]),J,a("div",Y,[Z,a("p",null,[e("此功能需购买"),a("a",aa,[e("专业版DLC"),r(t)])])]),ea,a("div",ra,[ia,a("p",null,[e("此功能需购买"),a("a",ta,[e("专业版DLC"),r(t)])])]),na,a("div",sa,[da,a("p",null,[e("此功能需购买"),a("a",ha,[e("专业版DLC"),r(t)])])]),oa,a("div",pa,[la,a("p",null,[e("带有"),ca,e("字样的模型使用"),a("a",ga,[e("ncnn"),r(t)]),e("作为前向推理框架，其兼容N卡及A卡，不带有此字样的模型无法用于A卡及核显。")])]),ua,a("div",_a,[ba,a("p",null,[e("此功能需购买"),a("a",fa,[e("专业版DLC"),r(t)])])]),xa,a("div",va,[ma,a("p",null,[e("此功能需购买"),a("a",Ca,[e("专业版DLC"),r(t)])])]),Ra])}const Da=p(k,[["render",Na],["__file","index.html.vue"]]);export{Da as default};
