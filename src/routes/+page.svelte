<script>
  let tap = 0;
</script>

<div class="visual_wrap overflow-hidden">
    <div class="visual_bg">
        <img alt="main" class="max-w-none" src="/main_visual.jpg"/>
    </div>
</div>
<div class="inquiry_wrap mt-20 flex flex-col items-center space-y-10">
    <div class="text-3xl font-bold">대출 모집인 조회</div>
    <div class="tap_wrap w-[1140px]">
        <ul class="flex h-[56px]">
            <li class="flex-1">
                <button
                        class="w-full h-full text-white {tap === 0 ? 'border-[#0b4fa1] border-solid border-2 bg-[#0b4fa1]' : 'border-white border-solid border bg-[#A9A9A9]'}"
                        on:click={() => tap = 0}>
                    개인
                </button>
            </li>
            <li class="flex-1">
                <button
                        class="w-full h-full text-white {tap === 1 ? 'border-[#0b4fa1] border-solid border-2 bg-[#0b4fa1]' : 'border-white border-solid border bg-[#A9A9A9]'}"
                        on:click={() => tap = 1}>
                    법인
                </button>
            </li>
        </ul>
        <div class="tap_cont bg-[#f7f9fa] p-10 divide-y divide-dashed divide-gray-300">
            <form class="pb-14">
                <div class="flex justify-center space-x-2">
                    <input
                            class="h-[50px] text-[#222] border border-[#d9d9d9] border-solid rounded-l-lg w-[60%] pl-4"
                            name="regiNo" placeholder="등록번호 예)10-00000000" type="text"/>
                    <button class="h-[50px] text-white bg-gray-800 border border-[#0b4fa1] border-solid rounded-r-lg w-[10%]"
                            type="submit"
                    >조회
                    </button>
                </div>
            </form>
            <ul class="pt-10 space-y-2">
                {#if tap === 0}
                    <li class="flex items-center space-x-1.5">
                        <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                        <p class="text-gray-600 text-[15px]">대출상담사 등록번호를 입력해야 조회 가능합니다.</p>
                    </li>
                    <li class="flex items-center space-x-1.5">
                        <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                        <p class="text-gray-600 text-[15px]">조회가능정보 : 대출모집인의 등록번호, 성명, 연락처, 계약 금융회사, 취급상품, 계약일자 등</p>
                    </li>
                {:else}
                    <li class="flex items-center space-x-1.5">
                        <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                        <p class="text-gray-600 text-[15px]">법인의 등록번호를 입력해야 조회 가능합니다.</p>
                    </li>
                    <li class="flex items-center space-x-1.5">
                        <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                        <p class="text-gray-600 text-[15px]">조회가능정보 : 상호, 대표자성명, 등록번호, 취급상품, 등록일자, 계약 금융회사</p>
                    </li>
                {/if}
                <li class="flex items-center space-x-1.5">
                    <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                    <p class="text-red-600 text-[15px]">등록증발급</p>
                </li>
            </ul>
        </div>
    </div>
</div>