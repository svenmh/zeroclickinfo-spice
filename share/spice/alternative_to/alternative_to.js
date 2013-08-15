function ddg_spice_alternative_to(api_result) {
    "use strict";

    if(!api_result || !api_result.Items || api_result.Items.length === 0) {
        return;
    }

    Spice.render({
        data                     : api_result,
        source_name              : 'AlternativeTo',
        source_url               : api_result.Url,
        spice_name               : 'alternative_to',
        template_frame           : "carousel",
        template_options         : {
            items                : api_result.Items,
            template_item        : "alternative_to",
            template_detail      : "alternative_to_details",
            li_height            : 60
        },
    });
}
