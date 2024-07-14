import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as p,b as a,d as e,a as r,w as o,e as l}from"./app-y9h0ZqlG.js";const c={},d={class:"hint-container warning"},u=a("p",{class:"hint-container-title"},"Warning",-1),m=l(`<p>SVFI supports calling via the command line</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Using the pure OLS command line is the fastest.</p></div><h2 id="environment-setup" tabindex="-1"><a class="header-anchor" href="#environment-setup" aria-hidden="true">#</a> Environment Setup</h2><ol><li>Create a new <code>steam_appid.txt</code> in the SVFI installation root directory and fill in the following content:</li></ol><blockquote><p>1692080</p></blockquote><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Filling in this text file will cause SVFI to start in standalone application mode to avoid interference from the Steam client.</p><p>This can achieve special operations such as <strong>multiple instances of the software</strong>, <strong>software installation location migration</strong>, and <strong>software version retention</strong>.</p><ul><li>Software version retention: After reverting the steam operation to the specified branch, copy the entire SVFI installation folder and ensure the existence of <code>steam_appid.txt</code>. In the future, you can click <code>SVFI.Professional</code> or <code>SVFI.Community</code> in this folder to run this version of SVFI.</li></ul></div><ol><li>In the <strong>SVFI installation root directory</strong>, start the command prompt <code>cmd</code> (if the installation location is not on the system disk, no administrator privileges are required), enter <code>one_line_shot_args -h</code> and press Enter, and you should be able to see the following similar content:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: #### SVFI CLI tool by Jeanna #### [-h] -iINPUT -cCONFIG -t TASK_ID
                                         [--concat-only] [--extract-only]
                                         [--render-only] [-p] [--pipe-in]
                                         [--pipe-out]
                                         [--pipe-iw PIPE_IN_WIDTH]
                                         [--pipe-ih PIPE_IN_HEIGHT]
                                         [--pipe-in-fps PIPE_IN_FPS]
                                         [--pipe-in-pixfmt {rgb24,rgb48be,rgb48le,rgb48}]
                                         [--pipe-rgb]
                                         [--pipe-colormatrix {470bg,170m,2020ncl,709}]

To enhance Long video/image sequence quality

optional arguments:
  -h, --help            show this help message and exit

Basic Settings:
  -iINPUT, --inputINPUT
                        Path of input video/image sequence folder
  -cCONFIG, --configCONFIG
                        Path of config
  -t TASK_ID, --task-id TASK_ID
                        13-digit Task id
  --concat-only         Concat Chunk only
  --extract-only        Extract input to frames Only
  --render-only         Render only
  -p, --preview         Preview Settings

Pipe Settings:
  Set the follow parameters when &#39;-mid&#39; is assigned, or you will encounter
  exceptions.Output Y4M at YUV444P10

  --pipe-in             This enables OLS to obtain input data from stdin
  --pipe-out            This enables OLS to pipe output to stdout
  --pipe-iw PIPE_IN_WIDTH
                        Width of input raw RGB, effective when --pipe-in
                        appointed
  --pipe-ih PIPE_IN_HEIGHT
                        Height of input raw RGB, effective when --pipe-in
                        appointed
  --pipe-in-fps PIPE_IN_FPS
                        Input stream FPS, effective when --pipe-in appointed
  --pipe-in-pixfmt {rgb24,rgb48be,rgb48le,rgb48}
                        Pixel format of input raw RGB, effective when --pipe-
                        in appointed
  --pipe-rgb            Pipe RGB Raw data to stdout, effective when --pipe-out
                        appointed
  --pipe-colormatrix {470bg,170m,2020ncl,709}
                        Colormatrix for RGB-YUV Conversion, effective when
                        --pipe-in appointed, --pipe-rgb not appointed


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="explanation-of-typical-usage-scenarios" tabindex="-1"><a class="header-anchor" href="#explanation-of-typical-usage-scenarios" aria-hidden="true">#</a> Explanation of typical usage scenarios</h2><h3 id="multi-open-svfi" tabindex="-1"><a class="header-anchor" href="#multi-open-svfi" aria-hidden="true">#</a> Multi-Open SVFI</h3><p>The <code>one_line_shot_args</code> (hereinafter referred to as OLS) program supports multi-opening after completing the above configuration, for multi-process tasks. Please note that this may cause significant resource usage.</p><p>There are three necessary parameters that need to be entered:</p><ul><li><code>--input</code>: Folder where the video file or image sequence to be processed is located</li><li><code>--config</code>: Configuration file generated by the SVFI GUI program, usually located in the <code>Configs</code> folder of the installation directory</li><li><code>--task-id</code>: Task ID, a non-empty string used to distinguish different tasks.</li></ul><h3 id="pipeline-input" tabindex="-1"><a class="header-anchor" href="#pipeline-input" aria-hidden="true">#</a> Pipeline Input</h3><p>SVFI supports input of RGB streams from other processes, currently supporting bare stream input of <code>rgb24</code>, <code>rgb48</code>, <code>rgb48le</code>, and <code>rgb48be</code> pixel formats.</p><p>You must fill in <code>--pipe-in</code> to enable this function, and specify <code>--pipe-iw</code> for the input image pixel length, <code>--pipe-ih</code> for the width, <code>--pipe-in-fps</code> for the input stream frame rate (only supports floats), and <code>--pipe-in-pixfmt</code> for the pixel format of the input.</p><h3 id="pipeline-output" tabindex="-1"><a class="header-anchor" href="#pipeline-output" aria-hidden="true">#</a> Pipeline Output</h3><p>SVFI supports outputting RGB or <code>YUV444P10</code> Y4M streams to <code>stdout</code>.</p><p>You must fill in <code>--pipe-out</code> to enable this function,</p><ul><li>If you need to output <code>YUV444P10</code>, specify <code>--pipe-colormatrix</code> for SVFI to convert RGB to YUV streams</li><li>To output <code>RGB</code> streams, specify <code>--pipe-rgb</code>. The specific output pixel format is controlled by the options in the configuration file. Generally, <code>rgb48</code> is output for high-precision workflows, and <code>rgb24</code> is output for non-high-precision workflows.</li></ul><h3 id="force-svfi-to-use-the-specified-gpu-number" tabindex="-1"><a class="header-anchor" href="#force-svfi-to-use-the-specified-gpu-number" aria-hidden="true">#</a> Force SVFI to use the specified GPU number</h3><ul><li>Select gpu0 to start the task in the SVFI interface, generate the task configuration file, and then follow the online tutorial separately</li><li>New command line cmd,</li><li>Enter <code>set CUDA_VISIBLE_DEVICES=1</code> and press Enter,</li><li>Call OLS to run SVFI on the GPU in the second PCIE slot</li><li>This method can solve the problem of not being able to specify the graphics card when using int8 quantization</li></ul><h3 id="command-line-examples" tabindex="-1"><a class="header-anchor" href="#command-line-examples" aria-hidden="true">#</a> Command Line Examples</h3><h4 id="batch-processing-all-mp4-webm-and-gif-files-in-a-folder-using-the-same-settings" tabindex="-1"><a class="header-anchor" href="#batch-processing-all-mp4-webm-and-gif-files-in-a-folder-using-the-same-settings" aria-hidden="true">#</a> Batch processing all mp4, webm, and gif files in a folder using the same settings</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> %i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&quot;folder path/*.mp4&quot;</span> <span class="token string">&quot;folder path/*.webm&quot;</span> <span class="token string">&quot;folder path/*.gif&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>one_line_shot_args.exe <span class="token parameter variable">--input</span> <span class="token string">&quot;%i&quot;</span> --task-id <span class="token string">&quot;%~ni&quot;</span> <span class="token parameter variable">--config</span> <span class="token string">&quot;SVFI_Config_vfi_sr.ini&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where:</p><ul><li>To execute in the SVFI installation software root directory using cmd</li><li><code>SVFI_Config_vfi_sr.ini</code> is the configuration file exported by clicking the Export Settings button below the advanced settings</li><li>It will be output to the same folder</li></ul><h4 id="use-ffmpeg-for-high-precision-frame-splitting-and-input-to-svfi-for-processing-and-use-y4m-for-input-to-ffmpeg-for-compression" tabindex="-1"><a class="header-anchor" href="#use-ffmpeg-for-high-precision-frame-splitting-and-input-to-svfi-for-processing-and-use-y4m-for-input-to-ffmpeg-for-compression" aria-hidden="true">#</a> Use <code>ffmpeg</code> for high-precision frame splitting and input to <code>SVFI</code> for processing, and use <code>Y4M</code> for input to <code>ffmpeg</code> for compression</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test/test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span>  one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_test.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="use-ffmpeg-for-high-precision-frame-splitting-and-input-to-a-2-length-svfi-pipeline-for-processing-and-output-y4m-for-compression-using-ffmpeg" tabindex="-1"><a class="header-anchor" href="#use-ffmpeg-for-high-precision-frame-splitting-and-input-to-a-2-length-svfi-pipeline-for-processing-and-output-y4m-for-compression-using-ffmpeg" aria-hidden="true">#</a> Use <code>ffmpeg</code> for high-precision frame splitting and input to a 2-length <code>SVFI</code> pipeline for processing, and output <code>Y4M</code> for compression using <code>ffmpeg</code></h4><p>The first OLS process is used for super-resolution, and the second OLS process is used for frame interpolation</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test/test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb48be <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span> one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_1.ini <span class="token parameter variable">-t</span> pipe_1 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span> --pipe-in-fps <span class="token number">24</span> --pipe-out --pipe-rgb --pipe-in-pixfmt rgb48be <span class="token operator">|</span> one_line_shot_args.exe <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_2.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-in-pixfmt rgb48 --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="use-vapoursynth-for-preprocessing-the-input-and-then-use-ffmpeg-for-high-precision-frame-splitting-and-svfi-pipeline-processing" tabindex="-1"><a class="header-anchor" href="#use-vapoursynth-for-preprocessing-the-input-and-then-use-ffmpeg-for-high-precision-frame-splitting-and-svfi-pipeline-processing" aria-hidden="true">#</a> Use <code>Vapoursynth</code> for preprocessing the input and then use <code>ffmpeg</code> for high-precision frame splitting and <code>SVFI</code> pipeline processing</h4><p>The <code>Vapoursynth</code> script <code>input.vpy</code> used:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> vapoursynth <span class="token keyword">as</span> vs
<span class="token keyword">from</span> vapoursynth <span class="token keyword">import</span> core
video <span class="token operator">=</span> core<span class="token punctuation">.</span>lsmas<span class="token punctuation">.</span>LWLibavSource<span class="token punctuation">(</span><span class="token string">r&#39;test.mp4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 960x540, 24fps</span>

<span class="token comment"># DO SOMETHING</span>

video<span class="token punctuation">.</span>set_output<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># output yuv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Command line:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vspipe input.vpy <span class="token parameter variable">--y4m</span> - <span class="token operator">|</span> ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> - <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span>  one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">-c</span> Configs/SVFI_Config_pipe_test.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> test/output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>After configuring the task parameters using SVFI and starting the task, use the <code>Config.ini</code> generated in the <code>Configs</code> folder for the command line task.</p></div>`,38);function v(f,h){const n=i("RouterLink");return t(),p("div",null,[a("div",d,[u,a("p",null,[e("This page is for advanced content. Please read the "),r(n,{to:"/en/pages/advanced-settings/"},{default:o(()=>[e("detailed explanation of advanced content")]),_:1}),e(" first.")])]),m])}const k=s(c,[["render",v],["__file","index.html.vue"]]);export{k as default};