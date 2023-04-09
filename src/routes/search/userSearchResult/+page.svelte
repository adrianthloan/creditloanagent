<script lang="ts">
  import {onMount} from "svelte";
  import {goto} from '$app/navigation';


  export let data: any;

  onMount(async () => {
    if (!data || !data.name) {
      await alert('잘못된 접근입니다.')
      goto('/');
    }

  })
</script>

<div class="inquiry_result_wrap w-full pt-20 pb-32 flex flex-col items-center space-y-10 bg-[#f7f9fa]">
    <div class="text-3xl font-bold">대출 모집인 조회결과</div>
    <div class="inner tap_wrap w-[1140px] bg-white">
        <div class="table_wrap">
            <div class="table_title">정보</div>
            <table class="member_info">
                <colgroup>
                    <col width="210">
                    <col width="*">
                </colgroup>


                <tbody>
                <tr>
                    <th>등록번호</th>
                    <td>{data.id}</td>
                </tr>
                <tr>
                    <th>성명</th>
                    <td>{data.name}</td>
                </tr>


                </tbody>
            </table>
        </div>
        <div class="table_wrap mgt60">
            <div class="table_title">상세정보(계약 금융기관 - 한국씨티은행)</div>
            <table class="member_info">
                <colgroup>
                    <col width="210">
                    <col width="*">
                </colgroup>
                <tbody>
                <tr>
                    <th>취급상품</th>
                    <td>{data.status}</td>
                </tr>
                <tr>
                    <th>계약일자</th>
                    <td>
                        {data.date}
                    </td>
                </tr>

                <tr>
                    <th>연락처</th>
                    <td>{data.phone}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
    <div class="btn_wrap flex">
        <a class="btn_black flex justify-center items-center bg-[#222] text-white w-[166px] h-[50px] rounded-l"
           href="/">홈으로</a>
    </div>
</div>

<style>
    .inner {
        width: 1140px;
        padding: 60px 60px 60px 280px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 8px 8px 0 0 #d2d4d5;
        margin: 50px auto 0;
        border: 1px solid #ddd;
        position: relative;
    }

    .table_wrap .table_title {
        font: 700 18px/18px 'Noto Sans KR';
        color: #0c4da2;
        text-align: left;
        border-bottom: 2px solid #0c4da2;
        padding-bottom: 30px;
    }

    table {
        margin: 0;
        padding: 0;
        border: 0;
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
        word-break: keep-all;
    }

    .member_info th {
        height: 64px;
        font: 500 16px/26px 'Montserrat', 'Noto Sans KR';
        color: #222;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .member_info td {
        height: 64px;
        font: 400 16px/26px 'Montserrat', 'Noto Sans KR';
        color: #666;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .mgt60 {
        margin-top: 60px !important;
    }
</style>