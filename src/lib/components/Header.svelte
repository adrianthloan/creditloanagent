<script>
  const headerTopItems = [
    {label: "관련규정", link: "/"},
    {label: "FAQ", link: "/"},
    {label: "개인정보처리방침", link: "/"},
    {label: "로그인", link: "/"},
  ]

  const headerBottomItems = [
    {label: "대출모집인 제도", link: "/"},
    {label: "대출모집인 조회", link: "/"},
    {label: "등록수수료 결제내역 조회", link: "/"},
    {label: "공지사항", link: "/"},
  ]
</script>

<div class="flex flex-col w-full items-center divide-y" id="header">
    <div class="header_top flex justify-center w-full h-[40px]">
        <ul class="flex justify-end items-center w-[1140px] h-full space-x-5">
            {#each headerTopItems as item}
                <li class="text-sm text-[#444]">
                    <a href="{item.link}">{item.label}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="header_bottom w-full h-[70px] flex justify-center">
        <div class="flex w-[1140px] h-full items-center justify-between">
            <div>
                <img alt="logo" src="/logo.png"/>
            </div>
            <div class="links h-full">
                <ul class="h-full flex space-x-10">
                    {#each headerBottomItems as item}
                        <li class="flex items-center text-[19px] text-[#222] font-bold hover:border-b-4 hover:text-[#0b4fa1] border-[#0b4fa1]">
                            <a href="{item.link}">{item.label}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>
