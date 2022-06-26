import { Education } from "./education";
import { singleSkillModel } from "./singleSkillModel";
import { Skill } from "./skill";

export interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    imageUrl?: string;
    githubUrl?: string;
    linkedInUrl?: string;
    mediumUrl?: string;
    about:string;
    title : string;
    //skills : any;
    birthday : string;
    age : number;
    city : string;
    degree : string;
    phone : string;
    education:{
      university:{
        department : string;
        description : string;
        name : string;
        gpa : number;
        year : number;
      }
    },
    experience:{
      e1:{
        company : string;
        description : string;
        title : string;
        date : string;
      },
      e2:{
        company : string;
        description : string;
        title : string;
        date : string;
      },
      e3:{
        company : string;
        description : string;
        title : string;
        date : string;
      }
    },
    skill:{
      s1:{
        name : string;
        img : string;
      },
      s2:{
        name : string;
        img : string;
      },
      s3:{
        name : string;
        img : string;
      },
      s4:{
        name : string;
        img : string;
      },
      s5:{
        name : string;
        img : string;
      },
      s6:{
        name : string;
        img : string;
      },
      s7:{
        name : string;
        img : string;
      },
      s8:{
        name : string;
        img : string;
      },
      s9:{
        name : string;
        img : string;
      },
      s10:{
        name : string;
        img : string;
      },
      s11:{
        name : string;
        img : string;
      },
      s12:{
        name : string;
        img : string;
      },
      s13:{
        name : string;
        img : string;
      }
    },
    reference:{
      r1:{
        company : string;
        name : string;
        title : string;
        phone : string;
        email : string;
    },
    r2:{
        company : string;
        name : string;
        title : string;
        phone : string;
        email : string;
    },
    r3:{
        company : string;
        name : string;
        title : string;
        phone : string;
        email : string;
    }
    },
    certificate :{
      c1:{
        company : string;
        name : string;
        date : string;
    },
    c2:{
        company : string;
        name : string;
        date : string;
    },
    c3:{
        company : string;
        name : string;
        date : string;
    },
    c4:{
        company : string;
        name : string;
        date : string;
    }
    },
    course : {
      c1:{
        company : string;
        name : string;
        lecturer : string;
    },
    c2:{
        company : string;
        name : string;
        lecturer : string;
    },
    c3:{
        company : string;
        name : string;
        lecturer : string;
    },
    c4:{
        company : string;
        name : string;
        lecturer : string;
    }
    },
    language : string
  }