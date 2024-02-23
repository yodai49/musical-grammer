const SECTION_LIST = [
    'Introduction', 
    'NaturalNote', 'DerivedNote',
    'MajorScale', 'MinorScale',
    'Keys', 'MovableDo',
    'Interval1', 'Interval2', 'Harmony',
];

function searchSection(current, offset){
    var index = SECTION_LIST.indexOf(current);
    return SECTION_LIST[index + offset];
}

export default searchSection;