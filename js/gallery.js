// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#imed-gallery").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom",
      dispaly: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
