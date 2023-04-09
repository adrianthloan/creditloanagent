<script>
  let tap = 0;

  let id = '';

  async function search(event) {
    const regex = /^\d{2}-\d{8}$/;
    event.preventDefault();

    if (!regex.test(id)) {
      alert('등록번호 형식을 확인해 주세요.');
      return;
    }

    const response = await fetch(`/api/search?id=${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });

    const result = await response.json();
    if (!result) {
      alert('조회된 결과가 없습니다.');
      return;
    }

    event.target.submit();
  }
</script>

<div class="inquiry_wrap mt-20 flex flex-col items-center space-y-10">
    <div class="text-3xl font-bold">대출 모집인 조회</div>
    <div class="tap_wrap w-[1140px]">
        <div class="tap_cont bg-[#f7f9fa] p-10 divide-y divide-dashed divide-gray-300">
            <form action="/search/userSearchResult" class="pb-14" method="GET"
                  on:submit={search}>
                <div class="flex justify-center space-x-2">
                    <input
                            bind:value={id}
                            class="h-[50px] text-[#222] border border-[#d9d9d9] border-solid rounded-l-lg w-[60%] pl-4"
                            name="id" placeholder="등록번호 예)10-00000000"
                            type="text"
                    />
                    <button class="h-[50px] text-white bg-gray-800 border border-[#0b4fa1] border-solid rounded-r-lg w-[10%]"
                            type="submit"
                    >조회
                    </button>
                </div>
            </form>
            <ul class="pt-10 space-y-2">
                <li class="flex items-center space-x-1.5">
                    <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                    <p class="text-gray-600 text-[15px]">대출상담사 등록번호를 입력해야 조회 가능합니다.</p>
                </li>
                <li class="flex items-center space-x-1.5">
                    <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                    <p class="text-gray-600 text-[15px]">조회가능정보 : 대출모집인의 등록번호, 성명, 연락처, 계약 금융회사, 취급상품, 계약일자 등</p>
                </li>
                <li class="flex items-center space-x-1.5">
                    <span class="dot w-[3px] h-[3px] bg-gray-600 inline-block"></span>
                    <p class="text-red-600 text-[15px]">등록증발급</p>
                </li>
            </ul>
        </div>
    </div>
</div>