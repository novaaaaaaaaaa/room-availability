function update_img() {
    combo_box_1 = document.getElementById('combo_1').value;

    if (document.getElementById('combo_2').value === "") {
        document.getElementById('ground_floor_select').setAttribute('selected', true);
    };

    combo_box_2 = document.getElementById('combo_2').value;

    document.getElementById('img_display').innerHTML = '';

    console.log(document.getElementById('img_display').innerHTML);

    console.log(combo_box_1, combo_box_2);

    switch (combo_box_1) {
        case "buttermere" :
            switch (combo_box_2) {
                case 'ground_floor':
                    $(function() {
                        $("#img_display").load("image_displays/buttermere_ground_floor.html");
                    });
                    console.log(document.getElementById('img_display').innerHTML);
                    break;
                case 'first_floor' :               
                    $(function() {
                        $("#img_display").load("image_displays/buttermere_first_floor.html");
                    });
                    console.log(document.getElementById('img_display').innerHTML);
                    break;                
            };
            break;

        case "patterdale" :
            switch (combo_box_2) {
                case 'ground_floor':
                    $(function() {
                        $("#img_display").load("image_displays/patterdale_ground_floor.html");
                    });
                    console.log(document.getElementById('img_display').innerHTML);
                    break;
                case 'first_floor':
                    $(function() {
                        $("#img_display").load("image_displays/patterdale_first_floor.html");
                    });
                    console.log(document.getElementById('img_display').innerHTML);
                    break;
            };
            break;
    }
}