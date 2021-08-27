<template>
    <div class="cover_content">
        <div class="cover">
            <Menu />
        </div>
        <div class="page_footer">
            <span>
                <a href="https://beian.miit.gov.cn/"><img src="/icon/shield.svg" />豫ICP备2021021619号-1</a>
            </span>
            <span>
                <img src="/icon/copyright.svg" /> 2021-present Yangmn
            </span>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .cover_content {
        width: 100%;
        height: calc( 100vh - var(--navbar-height));
        left: 0;
        // top: -16px;
        top: calc(var(--navbar-height) - 16px ); 
        position: absolute;
        /* background: darkcyan; */
        z-index: -1;
    }

    .cover {
        width: 100%;
        height: 100%;
        background-image: url(//yangmn.com:3200/images/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
    }

    .dark .cover {
        background-image: url(//yangmn.com:3200/images/dark_bg.jpg);
        background-position: center;
    }

    .page_footer {
        // font-size: 16px;
        margin-top: -40px;
        padding: 8px 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        border-top: rgba( gray , 0.5 ) solid 1px;
        & span {
            & img {
                padding: 0 5px;
                height: 16px;
            }

            & a {
                color: var(--c--text);
            }
        }
    }
    @media (max-width: 540px) {
        .cover {
            background-image: url(//yangmn.com:3200/images/m_bg.jpg);
            background-position: center;
        }

        .dark .cover {
            background-image: url(//yangmn.com:3200/images/dark_m_bg.jpg);
            background-position: center;
        }

        .page_footer {
            margin-top: -60px;
            flex-direction: column;
            justify-content: space-around;
        }
    }

</style>