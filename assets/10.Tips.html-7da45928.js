import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as s,b as t,d as e,a as d,e as n}from"./app-a587a3d8.js";const o={},c=n('<h2 id="recommended-task-presets" tabindex="-1"><a class="header-anchor" href="#recommended-task-presets" aria-hidden="true">#</a> Recommended task presets</h2><p>For <strong>compression mode</strong>, resolution above 2K <strong>MUST</strong> use H265 or ProRes encoding</p><h3 id="community-edition" tabindex="-1"><a class="header-anchor" href="#community-edition" aria-hidden="true">#</a> Community Edition</h3><h4 id="animation-vfi" tabindex="-1"><a class="header-anchor" href="#animation-vfi" aria-hidden="true">#</a> Animation (VFI)</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">Very high quality</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss union v</td></tr><tr><td style="text-align:center;">quality</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">general</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">speed (N card)</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (N card, nuclear display acceleration suppression)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (A card)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">0.5</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h4 id="anime-slow-motion-supplementary-frames-and-animation-clips" tabindex="-1"><a class="header-anchor" href="#anime-slow-motion-supplementary-frames-and-animation-clips" aria-hidden="true">#</a> Anime (slow-motion supplementary frames and animation clips)</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">Time-space resampling</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss union v</td></tr><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">First-order difference deduplication</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">Remove 1 shot 2 and 1 shot 3</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">0.5</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Reduce stutter only, suppress jelly introduction</td><td style="text-align:center;">Fixed threshold deduplication 0.80</td><td style="text-align:center;">Choose from preset table above</td><td style="text-align:center;">0.5</td><td style="text-align:center;">Rife 2.3</td></tr></tbody></table><h4 id="real-people" tabindex="-1"><a class="header-anchor" href="#real-people" aria-hidden="true">#</a> real people</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">quality</td><td style="text-align:center;">spatiotemporal linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">general</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">speed (N card)</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (N card, nuclear display acceleration suppression)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (A card)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">1.0</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h3 id="professional-edition" tabindex="-1"><a class="header-anchor" href="#professional-edition" aria-hidden="true">#</a> Professional Edition</h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Make sure your player can play H.265 10bit,<br> Otherwise choose H.264 veryslow</p></div><h4 id="animation-vfi-1" tabindex="-1"><a class="header-anchor" href="#animation-vfi-1" aria-hidden="true">#</a> Animation (VFI)</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">Very high quality</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss union v</td></tr><tr><td style="text-align:center;">quality</td><td style="text-align:center;">spatiotemporal linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">dynamic optical flow scaling</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">regular (balanced)</td><td style="text-align:center;">spatio-temporal linearization</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">dynamic optical flow scaling</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Speed (N card)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (N card, nuclear display acceleration suppression)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (A card)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h4 id="anime-slow-motion-supplementary-frames-and-animation-clips-1" tabindex="-1"><a class="header-anchor" href="#anime-slow-motion-supplementary-frames-and-animation-clips-1" aria-hidden="true">#</a> Anime (slow-motion supplementary frames and animation clips)</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">Time-space resampling</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss union v</td></tr><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">First-order difference de-emphasis</td><td style="text-align:center;">Choose from the preset list above</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Extremely smooth (the material frame rate is around 24fps)</td><td style="text-align:center;">Remove one shot two and one shot three</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Only reduce stuttering, suppress the introduction of jelly</td><td style="text-align:center;">Fixed threshold de-emphasis 0.80</td><td style="text-align:center;">Choose from the preset table above</td><td style="text-align:center;">Dynamic optical flow scale</td><td style="text-align:center;">Rife 2.3</td></tr></tbody></table><h4 id="real-people-1" tabindex="-1"><a class="header-anchor" href="#real-people-1" aria-hidden="true">#</a> real people</h4><table><thead><tr><th style="text-align:center;">Scene</th><th style="text-align:center;">Video Fluency Optimization</th><th style="text-align:center;">Suppression Mode</th><th style="text-align:center;">Optical Flow Scale</th><th style="text-align:center;">frame interpolation Model</th></tr></thead><tbody><tr><td style="text-align:center;">quality</td><td style="text-align:center;">spatiotemporal linearization</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 2.3</td></tr><tr><td style="text-align:center;">Regular (balanced)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">speed (N card)</td><td style="text-align:center;">space-time linearization</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (N card, nuclear display acceleration suppression)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">Speed (A card)</td><td style="text-align:center;">Space-time linearization</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">1.0</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h2 id="skills" tabindex="-1"><a class="header-anchor" href="#skills" aria-hidden="true">#</a> skills</h2>',18),p=n("<li><p>In SVFI, most options are not the higher the &quot;number&quot;, the better the effect (such as transition parameters, deduplication parameters, CRF, optical flow scale, frame complement model). If you don&#39;t understand, it is recommended to choose strictly according to the instructions or <strong>default</strong>.</p></li><li><p>**For each option with (?) or (!), hovering over it will show the corresponding explanation. **</p></li><li><p>If <strong>pursuing quality</strong>, all <strong>select presets above normal</strong>; <strong>speed</strong> options are relatively ineffective.</p></li><li><p>If you do not have relevant knowledge about CRF, select parameter 16 by default or learn relevant knowledge through Baidu.</p></li><li><p>Hover the mouse over <strong>Transition Options</strong>, you can see <strong>corresponding instructions</strong>. Transition options are usually <strong>parameters set at 12</strong>.</p></li><li><p>Deduplication option Only 2d anime needs to use the deduplication option 3d, real people will choose not to remove duplicate frames.</p></li><li><p>Community Edition: In the single recognition function, according to user feedback, it is better to set the parameter value at 0.8-1.0**.</p></li><li><p>Pro version: Features <strong>1 shot 2</strong> more conservative, software <strong>fewer bugs</strong>. The function <strong>1 shot 3 and above</strong> is more aggressive and smoother, but <strong>problems and bugs are often more</strong> (such as screen disappearing, etc.).</p></li><li><p>If there are no special circumstances, it is recommended that you select function 1 and shoot 2, and all other options and parameters can be defaulted.</p></li><li><p>When svfi complements the frame, it will generally occupy the CPU (when CPU encoding is selected) and the cuda of the n card. If the CPU is always fully loaded and the cuda usage fluctuates greatly, the CPU is the bottleneck. At this time, you can <strong>adjust the compression preset or replace the encoder to speed up</strong> (such as adjusting CPU H.265 very slow to fast, CPU H.264 slow to NVENC H.264 slow).</p></li><li><p>Note that <strong>better encoders and presets</strong> are recommended if CPU is not the bottleneck. Because the cuda of the graphics card determines the speed of supplementary frames, and the CPU determines the speed of encoding. The speed of supplementary frame can only be improved by <strong>replacing a better graphics card</strong>, but <strong>encoding speed can be considered by choosing a faster</strong>, lower-quality encoder and preset.</p></li><li><p>The CPU encoding is soft editing, soft editing ** generally slow speed, small files, good quality **.</p></li><li><p>NVENC, QSV, and VCE are hardware encoding, among which NVENC uses nVidia graphics card, QSV uses Intel graphics card, and VCE uses AMD graphics card. The characteristics of hardware encoding are fast speed and large file size. The CPU is poor.</p></li>",13),h={href:"https://developer.nvidia.com/video-encode-and-decode-gpu",target:"_blank",rel:"noopener noreferrer"},g=n("<li><p>Hard coding will have a certain load on the graphics card. If you choose NVENC and a Broken Pipe error occurs, then <strong>Reduce the N card hard coding preset or switch to the core video code QSV</strong>. If you still get the same error, then <strong>Use CPU</strong>.</p></li><li><p>Suggestions for super resolution VFI:<br> If you use cugan, esrgan and other algorithms for super resolution, it is recommended to perform super resolution supplementary frames separately, otherwise the video memory will overflow (<code>CUDA out of memory</code> will cause many problems)<br> If you only have one graphics card that can be used for super resolution and supplementary frames, it is recommended to close other software that may occupy video memory before starting the task. If you don’t mind the trouble, because the Windows desktop itself will occupy a certain amount of video memory, if your computer has a nuclear display, you can restart the computer and enter the BIOS to set the nuclear display output, and insert the display signal plug into the motherboard, and then turn it on to use SVFI. In this way, the maximum available video memory can be obtained, and the processing speed of super-complemented frames will be a little faster.</p></li><li><p>Suggestions for suppression settings:<br> If the compression group is not very strict on compression, hardware encoding (NVENC, VCE, QSV, etc.) can be used to avoid CPU compression bottlenecks. CPU bottlenecks will cause graphics card usage to drop<br> CRF is set to 16, and the rest can be done as above</p></li><li><p>The most commonly used models for supplementary frames:<br> Use the 2.3 model</p></li><li><p>Commonly used models for animation super resolution:<br> Using the CUGAN model</p></li>",5);function y(m,u){const a=i("ExternalLinkIcon");return l(),s("div",null,[c,t("ul",null,[p,t("li",null,[t("p",null,[e("For hard encoding, NVENC is preferred. In the N card hard encoding preset (you can hover the mouse to see the description), you can set it yourself in <"),t("a",h,[e("https://developer.nvidia.com/video-encode-and-decode-gpu"),d(a)]),e(" -support-matrix-new> Query the hard-coded presets of your graphics card. The 20 series and 30 series are generally 7th+.")])]),g])])}const b=r(o,[["render",y],["__file","10.Tips.html.vue"]]);export{b as default};
