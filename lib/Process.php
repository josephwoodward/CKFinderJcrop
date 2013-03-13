<?php

include('Boot.php');

$image = new Image();

if ( $image->isPosted() ) {
    $image->resize();
    echo 'Image successfully cropped and is located within the folder named \'' . $image->getFolderName() . '\'';
}
