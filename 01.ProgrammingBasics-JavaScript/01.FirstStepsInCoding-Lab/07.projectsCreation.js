function projectsCreation(param1, param2) {
    let name = param1;
    let projectsNum = param2;

    let totalProjectTime = projectsNum * 3;
    let data = `The architect ${name} will need ${totalProjectTime} hours to complete ${projectsNum} project/s.`

    console.log(data);
}

projectsCreation("George", 4);
projectsCreation("Sanya", 9);