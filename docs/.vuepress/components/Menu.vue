<template>
    <nav class='menu'>
        <input checked='checked' class='menu-toggler' id='menu-toggler' type='checkbox'>
        <label for='menu-toggler'></label>
        <ul>
            <li class='menu-item'>
                <a href='/system' >开始</a>
            </li>
            <li class='menu-item'>
                <a  href='http://test.yangmn.com/' target="_blank">练习</a>
            </li>
            <li class='menu-item'>
                <a  href='#' ></a>
            </li>
            <li class='menu-item'>
                <a  href='#' ></a>
            </li>
            <li class='menu-item'>
                <a  href='/record' >记录</a>
            </li>
            <li class='menu-item'>
                <a  href='https://github.com/18437951091/vuepress-starter' target="_blank" >Github</a>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    // helpers

    $toggler-size: 40px;
    $toggler-color: darkcyan;
    $toggler-transition: transform .5s,
    top .5s;

    $item-count: 6;
    $item-size: $toggler-size * 2;
    $item-color: var(--c--text);
    $item-transition: .5s;

    @mixin size ($width, $height: $width) {
        width: $width;
        height: $height;
    }

    @mixin absolute-center {
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
    }

    @mixin line {
        @include size($toggler-size, $toggler-size/8);
        display: block;
        z-index: 1;
        border-radius: $toggler-size/16;
        background: rgba($toggler-color, 0.7);
        transition: $toggler-transition;
    }

    // styles


    .menu-toggler {
        @include absolute-center;
        @include size($toggler-size);
        z-index: 2;
        opacity: 0;
        cursor: pointer;

        &:hover+label,
        &:hover+label:before,
        &:hover+label:after {
            background: $toggler-color;
        }
    }

    .menu-toggler:checked {
        &+label {
            background: transparent;
        }

        &+label:before,
        &+label:after {
            top: 0;
            width: $toggler-size;
            transform-origin: 50% 50%;
        }

        &+label:before {
            transform: rotate(45deg);
        }

        &+label:after {
            transform: rotate(-45deg);
        }
    }

    .menu-toggler:checked~ul {
        .menu-item {
            opacity: 1;
        }

        @for $i from 0 through $item-count - 1 {
            .menu-item:nth-child(#{$i + 1}) {
                transform: rotate(360deg / $item-count * $i) translateX(-$item-size - 30px);
            }
        }

        .menu-item a {
            pointer-events: auto;
        }
    }

    .menu-toggler+label {
        @include line;
        @include absolute-center;

        &:before,
        &:after {
            @include line;
            content: "";
            position: absolute;
            left: 0;
        }

        &:before {
            top: $toggler-size/4;
        }

        &:after {
            top: -$toggler-size/4;
        }
    }

    @for $i from 0 through $item-count - 1 {
        .menu-item:nth-child(#{$i + 1}) a {
            transform: rotate(-360deg / $item-count * $i);
        }
    }

    .menu-item {
        @include absolute-center;
        @include size($item-size);
        display: block;
        opacity: 0;
        transition: $item-transition;
    }

    .menu-item a {
        display: block;
        width: inherit;
        height: inherit;
        line-height: $item-size;
        color: rgba($item-color, 0.7);
        background: rgba(gray, 0.4);
        border-radius: 50%;
        text-align: center;
        text-decoration: none;
        font-size: $item-size/4;
        pointer-events: none;
        transition: .2s;

        &:hover {
            box-shadow: 0 0 0 $item-size/40 rgba(gray, 0.5);
            color: $item-color;
            background: rgba(gray, 0.3);
            font-size: $item-size/3.2;
        }
    }
.dark .menu-item a {

        background: rgba(black, 0.6);


        &:hover {
            box-shadow: 0 0 0 $item-size/40 rgba(black, 0.7);
            background: rgba(black, 0.5);
        }
    }

</style>