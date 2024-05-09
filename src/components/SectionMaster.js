const SECTION_LIST = [
    'Introduction', 
    'NaturalNote', 'DerivedNote',
    'MajorScale', 'MinorScale',
    'Key1', 'Key2', 'MovableDo',
    'Interval1', 'Interval2', 'Chord',
];

function searchSection(current, offset){
    var index = SECTION_LIST.indexOf(current);
    return SECTION_LIST[index + offset];
}

export default searchSection;