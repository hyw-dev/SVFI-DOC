import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as e,d as a,a as i,e as t}from"./app-a587a3d8.js";const l={},c={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"Tips",-1),p={href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"},u=t('<h2 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h2><p>Container (Container) is also known as encapsulation format, or format (Format), multimedia container (Multimedia Container), common encapsulation format (MP4/MKV...), and H.264/H.265/AC3/AAC belongs to the encoding method \\ encoding Format (Codec), the video stream and audio stream encapsulated in MP4 and MKV (encapsulation format) can use the same encoding format</p><h2 id="some-caveats" tabindex="-1"><a class="header-anchor" href="#some-caveats" aria-hidden="true">#</a> Some caveats</h2><h3 id="flac-free-lossless-audio-codec-free-lossless-audio-compression-coding" tabindex="-1"><a class="header-anchor" href="#flac-free-lossless-audio-codec-free-lossless-audio-compression-coding" aria-hidden="true">#</a> flac - Free Lossless Audio Codec - Free lossless audio compression coding</h3>',4),m={href:"https://developer.mozilla.org/zh-TW/docs/Web/Media/Formats/",target:"_blank",rel:"noopener noreferrer"},f=t('<h3 id="m4a" tabindex="-1"><a class="header-anchor" href="#m4a" aria-hidden="true">#</a> m4a</h3><p>m4a (encapsulation format, audio-only MPEG-4/mp4 files will use the .m4a extension) can be encoded using ALAC (Apple Lossless Audio Codec) or AAC (Advanced Audio Coding).</p><h3 id="mp3" tabindex="-1"><a class="header-anchor" href="#mp3" aria-hidden="true">#</a> mp3</h3><p>MP3 (formally MPEG-1 Audio Layer III or MPEG-2 Audio Layer III) is composed of MPEG-1 (encapsulation container) and an audio track encoded with MPEG-1 Audio Layer III encoding.</p><h3 id="wav-related" tabindex="-1"><a class="header-anchor" href="#wav-related" aria-hidden="true">#</a> wav related</h3><p>WAV belongs to the package format, and the packaged PCM belongs to the original audio data, which is completely uncompressed encoding method</p><p>PCM - Pulse Code Modulation (Pulse Code Modulation) is a method of digitizing analog signals. It is the most commonly used and simplest waveform encoding method.</p><p>LPCM is a specific type of PCM, and although ‎‎PCM‎‎ is a more general term, it is often used to describe data encoded as LPCM. ‎</p><p>BWF (Broadcast Wave Format)</p><p>The suffix is also wav, as the successor of WAV, which is a standard audio format created by the European Broadcasting Union (European Broadcasting Union). BWF has more data regarding the file. But there is no difference in track quality</p><p>RF64 (the suffix is usually written w64 to distinguish) (multichannel audio file)</p><p>An extension of the WAV file format, which can be larger than 4GB in file size. It has been specified by the European Broadcasting Union. It has been accepted as the ITU recommendation ITU-R BS.2088.</p><h3 id="h-265-related" tabindex="-1"><a class="header-anchor" href="#h-265-related" aria-hidden="true">#</a> H.265 related</h3><p>H.265/HEVC is the encoding</p><p>H.265 is the standard, HEVC is the winner, also called MPEG-H Part 2</p><p>Some people think that H.265 is used to refer to non-x265 HEVC commercial encoders in communication (personally thinks it is non-standard and has no definition, it is a colloquial content, for reference only)</p><p>And some sites require that the Web-dl title must be written in H.265, and HEVC cannot be used, while the original disk/Remux is only allowed to write HEVC. (I personally think it belongs to regional rules, and it is not recommended to be understood as a standard)</p>',17),g={href:"http://www.strongene.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.nvidia.com/en-",target:"_blank",rel:"noopener noreferrer"},y=t('<h3 id="qaac" tabindex="-1"><a class="header-anchor" href="#qaac" aria-hidden="true">#</a> qaac</h3><p>qaac is a command-line AAC/ALAC encoder frontend based on the Apple encoder. Since 1.00, qaac uses CoreAudioToolbox.dll directly. Therefore, it is no longer necessary to install QuickTime. However, Apple application support is required. Support AAC-LC, AAC-HE, ALAC encoding. Generally, what we make is LC</p><p>(qaac is open source, seems to be copylefted and has no restrictions)</p><h2 id="package-format" tabindex="-1"><a class="header-anchor" href="#package-format" aria-hidden="true">#</a> Package format</h2><p>There are many common MP4, MKV, RMVB, TS, FLV, AVI, etc., and the encodings supported by various packaging formats are different.</p><p>MKV vs MP4, the main differences are:</p><ol><li>MKV supports encapsulating FLAC as audio, but MP4 does not. But MP4 can also encapsulate lossless audio tracks (such as ALAC, although it is generally believed that ALAC is not as efficient as FLAC)</li><li>MKV supports encapsulating subtitles in ASS/SSA format, but MP4 does not. Generally, the subtitles produced by the subtitle group are in ASS format, so inner subtitles are more common in MKV format</li><li>As an industry standard, MP4 is generally more compatible with video editing software and playback devices than MKV (of course, Premiere can install plug-ins to support mkv, and iOS and Android can also be supported by third-party players), which is also the general compression group for mobile Device-optimized video is basically the reason for choosing the MP4 package.</li></ol><p>There are also some obsolete packaging formats, such as RM, AVI and so on.</p><h2 id="encoding-format" tabindex="-1"><a class="header-anchor" href="#encoding-format" aria-hidden="true">#</a> Encoding format</h2><p>Usually mediainfo needs to be packaged in a format to display relatively complete information, such as .pcm .aac .hevc cannot display information such as duration. .hevc cannot use the progress bar in the player.</p><p>LPCM (Linear pulse-code modulation) is generally also called PCM, but a specific type of PCM is different from PCM (Pulse Code Modulation), and its quantization level is linear and uniform.</p><p>H.26X series: led by ITU (International Telecommunication Union), including H.261, H.262, H.263, H.264, H.265.</p><ul><li>H.264: The tenth part of H.264/MPEG-4, or AVC (Advanced Video Coding, Advanced Video Coding), is a video compression standard, a widely used high-precision video recording, compression and Publish format.</li><li>H.265: High Efficiency Video Coding (HEVC for short) is a video compression standard, the successor of H.264/MPEG-4 AVC. HEVC not only improves the image quality, but also achieves twice the compression rate of H.264/MPEG-4 AVC (equivalent to a 50% reduction in the bit rate under the same picture quality), and can support 4K resolution or even ultra-high-quality TV, the highest The resolution can reach 8192×4320 (8K resolution), which is the current development trend.</li></ul><p>MPEG series: dominated by MPEG (Moving Picture Experts Group) under ISO (International Standards Organization), video coding mainly includes:</p><ul><li>MPEG-1 Part II: Mainly used on VCD, some online videos also use this format, the quality of this codec is roughly equivalent to the original VHS video tape.</li><li>MPEG-2 Part II: Equivalent to H.262, used in DVD, SVCD and most digital video broadcasting systems and cable distribution systems (Cable Distribution Systems).</li><li>The second part of MPEG-4: It can be used in network transmission, broadcasting and media storage. Compared with MPEG-2 and the first version of H.263, its compression performance has been improved.</li><li>MPEG-4 Part 10: It is technically the same standard as ITU-TH.264. The cooperation between the two gave birth to the H.264/AVC standard. ITU-T named it H.264, while ISO/IEC called it It is MPEG-4 Advanced Video Coding (Advanced Video Coding, AVC).</li></ul><p>AVS (Audio Video coding Standard): my country&#39;s independent intellectual property source coding standard, which is the abbreviation of the &quot;Advanced Audio and Video Coding for Information Technology&quot; series of standards. At present, two generations of AVS standards have been formulated.</p><ul><li>The first generation of AVS standards includes the national standard &quot;Advanced Audio and Video Coding for Information Technology Part 2: Video&quot; (AVS1 for short) and &quot;Advanced Audio and Video Coding for Information Technology Part 16: Video for Broadcasting and Television&quot; (AVS+ for short). The compression efficiency of AVS+ is equivalent to the highest level (High Profile) of the international similar standard H.264/AVC.</li><li>The second-generation AVS standard, referred to as AVS2, is the primary application target for ultra-high-definition video, and supports efficient compression of ultra-high-resolution (4K and above) and high-dynamic-range video. The compression efficiency of AVS2 has doubled that of the previous generation standard AVS+ and H.264/AVC, and surpassed the same type of international standard HEVC/H.265.</li></ul><p>Other series, such as VP8, VP9 (led by Google), RealVideo (produced by RealNetworks) and other encoding methods, are less used in Internet video and will not be introduced here.</p><h2 id="transcoding" tabindex="-1"><a class="header-anchor" href="#transcoding" aria-hidden="true">#</a> Transcoding</h2><p>Video transcoding (Video Transcoding) refers to converting a compressed and encoded video stream into another video stream to adapt to different network bandwidths, different terminal processing capabilities, and different user needs. Transcoding is essentially a process of first decoding and then encoding, so the code stream before and after conversion may or may not follow the same video coding standard.</p><h2 id="repackage-remux" tabindex="-1"><a class="header-anchor" href="#repackage-remux" aria-hidden="true">#</a> Repackage (Remux)</h2><p>Transcapsulation refers to the conversion of the video or audio package format, such as converting AVI video to MP4, during which no audio and video encoding and decoding work is performed, but the video and audio compression stream is directly converted from one It is obtained from a package format file and then packaged into another package format file. Simply put, copy-paste. Compared with transcoding, transcapsulation has two characteristics:<br> The processing speed is extremely fast. The audio and video encoding and decoding process is very complicated, occupying most of the transcoding time. Transcapsulation does not require encoding and decoding, saving a lot of processing time.<br> The audio and video quality is lossless. There is no decoding (decompression) and encoding (compression) process, so there will be no audio and video compression damage.<br> The repackaged file has almost the same resolution and bit rate as the original file, so it is also called &quot;original picture&quot; when playing. (Some packaging formats will have lossless compression algorithms, like While muxing sup into MKV there can be &quot;zlib&quot; compression used)</p><h2 id="detach-demux" tabindex="-1"><a class="header-anchor" href="#detach-demux" aria-hidden="true">#</a> Detach (Demux)</h2><p>Extract</p><p>Separate the encoding format from the encapsulation format</p><h2 id="lossless-compression-and-lossy-compression" tabindex="-1"><a class="header-anchor" href="#lossless-compression-and-lossy-compression" aria-hidden="true">#</a> Lossless compression and lossy compression</h2><p>First of all, PCM and LPCM are uncompressed formats, not called lossless compression. <s>(But there should be nothing wrong with calling it lossless)</s></p><p>Lossless in daily life is more colloquial and needs to be understood. Generally speaking, the lossless format refers to the lossless algorithm, which does not mean that the generated files must be lossless. Some audio tracks will lose bit depth or frequency. There will also be some unconventional operations from lossy to lossless.</p><p>It is usually said that the original disc and Remux are lossless. The original disc is generally the highest quality source that can be found, but its encoding format is lossy, and it is released after lossy compression from the master tape (colloquial). Remux is mainly for lossless extraction or conversion of video tracks and main audio tracks. (But there will be Hybrid)</p><h2 id="audio" tabindex="-1"><a class="header-anchor" href="#audio" aria-hidden="true">#</a> audio</h2><p>The compression rate of DTS (referring to the company) audio tracks is very poor, and they use this as a promotion, thinking that it will improve decoding efficiency and sound quality will be better.</p><p>DTS-HD MA is lossless</p><p>DTS-HD HRA is lossy</p><p>Both also have a core (DTS core, usually DTS refers to DTS core, but I don&#39;t know what it refers to).</p><p>Its encoder also contains the coding core of DTS Digital (DTS lossy audio format) so that when the player is not compatible with DTS-HD MA or DTS-HD HRA (DTS-HD High Resolution Audio), it can switch to DTS Digital (DTS Digital Generally, it will be encoded at a constant bit rate of 255Kbps, placed in the same stream as DTS-HD MA/HRA audio, and the format name is DTS-HD Core)</p><h3 id="lossy-audio" tabindex="-1"><a class="header-anchor" href="#lossy-audio" aria-hidden="true">#</a> Lossy Audio</h3><p>AC3 is an industry standard for the film and television industry. But its release time is very early. (slightly earlier than MP3)</p><h4 id="dts" tabindex="-1"><a class="header-anchor" href="#dts" aria-hidden="true">#</a> DTS</h4><p>DTS core 768 is considered inferior to AC3 640.</p><h4 id="ac3" tabindex="-1"><a class="header-anchor" href="#ac3" aria-hidden="true">#</a> AC3</h4><p>Dolby Laboratories used the MDCT algorithm along with perceptual coding principles to develop the AC-3 audio format for theater needs. The AC-3 format was released in 1991 as a Dolby Digital standard.</p><ul><li><p>AC-3 (Audio Codec 3, Advanced Codec 3, Acoustic Coder 3. [Different from Adaptive Transform Acoustic Coding 3/ATRAC3, another format developed by Sony])</p></li><li><p>Dolby Digital Surround EX</p></li></ul><p>Dolby Digital Surround EX (Dolby Digital Surround EX), is a collaboration product between Dolby Laboratories and Lucasfilm THX in the first Star Wars: Menace Lurking movie released in May 1999. In consideration of economic benefits and backward compatibility, a rear surround channel is inserted between the left surround and right surround to form a 6.1 output. It uses matrix encoding, which is a separate channel, the situation is like the relationship between the front left and right channels and the center channel. So it can output 5.1 on standard 5.1 equipment, and can output 6.1 on equipment that supports Dolby Digital Surround EX at the same time. This technique is used in the Star Wars series. Many DVDs support the output of Dolby Digital Surround EX.</p><ul><li>Dolby Digital EX</li></ul><p>Dolby Digital EX (Dolby Digital EX) is the civilian version of Dolby Digital Surround EX. Dolby Digital EX is similar to Dolby&#39;s early Pro-Logic technology, integrating matrix technology to add a center and a rear channel to the stereo sound track. Dolby Digital EX adds a rear channel on the basis of 5.1 Dolby Digital to create a 6.1 or 7.1 channel output. However, this technology is not considered a true 6.1 or 7.1 encoding, and unlike its rival DTS-ES format, it does not provide a complete and discrete 6 or 7 audio tracks.</p><h4 id="dolby-digital-plus-ddp-eac3" tabindex="-1"><a class="header-anchor" href="#dolby-digital-plus-ddp-eac3" aria-hidden="true">#</a> Dolby Digital Plus/DDP/EAC3</h4><p>Currently the preferred format of this group (except 1.0/2.0, it is generally recommended to use EX when making)</p><p>Dolby Digital Plus (Dolby Digital Plus), also known as E-AC-3, is an enhanced coding system based on AC3. It increases the maximum bit rate to 6 Mbps, supports 14 channels (13.1), and enhanced encoding technology can reduce compression artifacts. Not compatible with Dolby Digital equipment, but Dolby Digital Plus decoder can transcode Dolby Digital Plus into Dolby Digital through optical fiber/coaxial output. Dolby Digital Plus is the mandatory audio format for HD DVD and Blu-ray Disc. In Blu-ray players, Dolby Digital Plus is an optional format for the primary audio track (Primary Audio), and a mandatory format for the secondary audio track (Secondary Audio).</p><h4 id="aac" tabindex="-1"><a class="header-anchor" href="#aac" aria-hidden="true">#</a> AAC</h4><p>AAC has more advantages at low codes. (but Opus does it better)</p><p>Because AAC is a huge family, they are divided into 9 specifications to meet the needs of different occasions. It is also because of the variety of AAC profiles that ordinary computer users feel very troubled:</p><ul><li><p>MPEG-2 AAC LC low complexity specification (Low Complexity)</p></li><li><p>MPEG-2 AAC Main main specification</p></li><li><p>MPEG-2 AAC SSR variable sampling rate specification (Scaleable Sample Rate)</p></li><li><p>MPEG-4 AAC LC Low Complexity specification (Low Complexity), the audio part of the MP4 file that is more common in mobile phones now includes the audio file of this specification</p></li><li><p>MPEG-4 AAC Main Specification</p></li><li><p>MPEG-4 AAC SSR variable sampling rate specification (Scaleable Sample Rate)</p></li><li><p>MPEG-4 AAC LTP long term prediction specification (Long Term Prediction)</p></li><li><p>MPEG-4 AAC LD low delay specification (Low Delay)</p></li><li><p>MPEG-4 AAC HE high efficiency specification (High Efficiency)</p></li></ul><p>Among the above-mentioned specifications, the main specification (Main) includes all functions except gain control, and its sound quality is the best, while the low-complexity specification (LC) is relatively simple, without gain control, but improves the coding efficiency. The specifications of &quot;SSR&quot; and &quot;LC&quot; are basically the same, but there is more gain control function. In addition, MPEG-4 AAC/LTP/LD/HE are used for encoding at low bit rates, especially &quot;HE&quot; is It is supported by Nero AAC encoder, which is a commonly used encoder recently, but generally speaking, the sound quality of the Main specification and the LC specification is not much different, so most of the AAC specifications currently used are &quot;LC&quot; specifications, because mobile phones must be considered Current memory capacity is not at a reasonable level.</p><p>MPEG-4 AAC LC (Low Complexity) is the most commonly used specification. We call it &quot;Low Complexity Specification&quot;, and we call it &quot;LC-AAC&quot; for short. This specification can find a balance between medium bit rate coding efficiency and sound quality. point. The so-called medium bit rate refers to the bit rate between 96kbps-192kbps. Therefore, if you want to use the LC-AAC specification, please try to control the code rate within the range mentioned above.</p><p>ffmpeg</p><p>Based on quality produced from high to low:</p><p>libopus &gt; libvorbis &gt;= libfdk_aac &gt; aac &gt; libmp3lame &gt;= eac3/ac3 &gt; libtwolame &gt; vorbis &gt; mp2 &gt; wmav2/wmav1</p><h4 id="some-lossy-audio-tests" tabindex="-1"><a class="header-anchor" href="#some-lossy-audio-tests" aria-hidden="true">#</a> Some lossy audio tests</h4><p>double blind:</p>',59),A={href:"https://web.archive.org/web/20060831191536/http://www.rjamorim.com/test/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://web.archive.org/web/20110522045514/http://cec.concordia.ca/econtact/9_4/tsabary.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://tech.ebu.ch/docs/tech/tech3324.pdf",target:"_blank",rel:"noopener noreferrer"};function w(D,M){const o=s("ExternalLinkIcon");return r(),d("div",null,[e("div",c,[h,e("p",null,[a("The following content is taken from "),e("a",p,[a("FXXS-Encode-Guide"),i(o)]),a(", thanks for their efforts")])]),u,e("p",null,[a("flac is both an encoding format and an encapsulation format (flac uses the same name as the container name (that is, it is also the name of the encapsulation format), <"),e("a",m,[a("https://developer.mozilla.org/zh-TW/docs/Web/Media/Formats/"),i(o)]),a(" Containers>)")]),f,e("p",null,[a("x265 is an open source and free encoder, and there are also some commercial encoders, such as "),e("a",g,[a("Strene"),i(o)]),a(",[NVENC]("),e("a",b,[a("https://www.nvidia.com/en-"),i(o)]),a(" us/geforce/guides/broadcasting-guide/)")]),y,e("p",null,[e("a",A,[a("https://web.archive.org/web/20060831191536/http://www.rjamorim.com/test/"),i(o)])]),e("p",null,[e("a",v,[a("https://web.archive.org/web/20110522045514/http://cec.concordia.ca/econtact/9_4/tsabary.html"),i(o)])]),e("p",null,[e("a",C,[a("https://tech.ebu.ch/docs/tech/tech3324.pdf"),i(o)])])])}const E=n(l,[["render",w],["__file","03.Encodings_ Encoders_ and Encapsulation Formats.html.vue"]]);export{E as default};
