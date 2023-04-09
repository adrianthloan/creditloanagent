<script>
  import {page} from '$app/stores'

  const headerBottomItems = [
    {label: "대출모집인 제도", link: "/info"},
    {label: "대출모집인 조회", link: "/search/userSearchPage"},
  ]
</script>

<div class="flex flex-col w-full items-center divide-y border-b" id="header">
    <div class="header_bottom w-full h-[70px] flex justify-center">
        <div class="flex w-[1140px] h-full items-center justify-between">
            <div>
                <a href="/">
                    <img alt="logo" src="/logo.png"/>
                </a>
            </div>
            <div class="links h-full">
                <ul class="h-full flex space-x-10">
                    {#each headerBottomItems as item}
                        <li class="text-[19px] text-[#222] font-bold hover:border-b-4 hover:text-[#0b4fa1] border-[#0b4fa1] {$page?.url?.pathname === item.link ? 'border-b-4' : ''}">
                            <a class="flex items-center  h-full" href="{item.link}">{item.label}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>
