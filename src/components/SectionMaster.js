const SECTION_LIST = [
    'Introduction', 
    'NaturalNote', 'DerivedNote',
];

function searchSection(current, offset){
    var index = SECTION_LIST.indexOf(current);
    return SECTION_LIST[index + offset];
}

export default searchSection;