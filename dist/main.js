let count = 0;
let mobile_navbar = document.getElementById('mobile-navbar');
let btn_toggle = document.getElementById('btn-toggle');
let svg_cub = document.getElementById('svg_cub');
let svg_x = document.getElementById('svg_x');
let educations_qualification = document.getElementById('educations_qualification');
let experiences_qualification = document.getElementById('experiences_qualification'); //text-white bg-light
let btn_educations = document.getElementById('btn_educations');
let btn_experiences = document.getElementById('btn_experiences');

function toggleNavbar(){
    mobile_navbar.classList.toggle('hidden');
    svg_cub.classList.toggle('hidden');
    svg_x.classList.toggle('hidden');
}

btn_educations.addEventListener('click', function(){
    toggleQualifications();
    this.classList.toggle('!text-white');
    this.classList.toggle('!bg-light');
    btn_experiences.classList.toggle('!bg-light');
    btn_experiences.classList.toggle('!text-white');
});

btn_experiences.addEventListener('click', function(){
    toggleQualifications();
    this.classList.toggle('!text-white');
    this.classList.toggle('!bg-light');
    btn_educations.classList.toggle('!bg-light');
    btn_educations.classList.toggle('!text-white');

});

function toggleQualifications() {
    educations_qualification.classList.toggle('hidden');
    experiences_qualification.classList.toggle('hidden');
}