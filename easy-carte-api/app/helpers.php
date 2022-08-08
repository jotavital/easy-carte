<?php

function randomFloat($min = 0, $max = 1)
{
    return round($min + mt_rand() / mt_getrandmax() * ($max - $min), 2);
}
