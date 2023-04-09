<script>
  const bottomBanners = [
    {title: '은행연합회', src: '/bottom_banner01.jpg', alt: 'bottom_banner01', link: 'https://www.kfb.or.kr/'},
    {title: '저축은행중앙회', src: '/bottom_banner02.jpg', alt: 'bottom_banner02', link: 'https://www.fsb.or.kr/'},
    {title: '생명보험협회', src: '/bottom_banner03.jpg', alt: 'bottom_banner03', link: 'https://www.klia.or.kr/'},
    {title: '손해보험협회', src: '/bottom_banner04.jpg', alt: 'bottom_banner04', link: 'https://www.knia.or.kr/'},
    {title: '신협', src: '/bottom_banner05.jpg', alt: 'bottom_banner05', link: 'http://www.cu.co.kr/'},
  ]
</script>
<div class="mt-36 w-full border-t border-solid">
    <div class="flex items-center justify-center py-10">
        {#each bottomBanners as banner}
            <a href={banner.link} target="_blank" title={banner.title} rel="noreferrer">
                <img alt={banner.alt} src={banner.src}/>
            </a>
        {/each}
    </div>
    <div class="flex bg-[#0e213a] w-full items-center justify-center">
        <div class="bottom-wrap flex justify-between w-[1140px] text-gray-400 p-12">
            <div class="text-sm space-y-2">
                <!--                <div class="divide-x divide-solid divide-gray-400 flex space-x-2">-->
                <!--                    <a href="/">HOME</a>-->
                <!--                    <a class="pl-2" href="/">개인정보처리방침</a>-->
                <!--                    <a class="pl-2" href="/">이용약관</a>-->
                <!--                    <p class="pl-2">오시는 길</p>-->
                <!--                    <p class="pl-2">대표전화 02-2011-0770</p>-->
                <!--                </div>-->
                <!--                <div>-->
                <!--                    <p>서울특별시 중구 다동길 43 (다동70번지) 한외빌딩12~13층 여신금융협회 (04521)</p>-->
                <!--                </div>-->
                <!--                <div class="space-x-4 flex">-->
                <!--                    <p>상호명 : (사)한국여신전문금융업협회</p>-->
                <!--                    <p>사업자등록번호 : 202-82-05723</p>-->
                <!--                    <p>대표자 : 정완규</p>-->
                <!--                </div>-->
                <div>
                    COPYRIGHT © THE CREDIT FINANCE ASSOCIATION ALL RIGHTS RESERVED
                </div>
            </div>
            <div>
                <img alt="logo" src="/footer_logo.png"/>
            </div>
        </div>

    </div>
</div>