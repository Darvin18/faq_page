
document.getElementById('guarantees').addEventListener("mouseover", function(){
    document.getElementById('guarantees').classList.add('open');
    document.getElementById('wrapper_menu').classList.add('second_open');
})

document.getElementById('guarantees').addEventListener("mouseout", function(){
    document.getElementById('guarantees').classList.remove('open');
    document.getElementById('wrapper_menu').classList.remove('second_open');
})

document.getElementById('safely').addEventListener("mouseover", function(){
    document.getElementById('safely').classList.add('open');
    document.getElementById('safely_menu').classList.add('second_open');
})

document.getElementById('safely').addEventListener("mouseout", function(){
    document.getElementById('safely').classList.remove('open');
    document.getElementById('safely_menu').classList.remove('second_open');
})