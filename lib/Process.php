<?php

include('Boot.php');

$image = new Image();

if ( $image->isPosted() ) {
    $new_file = $image->resize();
    echo 'Image successfully cropped and is located within the same folder with name: \''.$new_file.'\'';
}
