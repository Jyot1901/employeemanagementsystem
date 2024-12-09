const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "aarav@gmail.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "vihan@gmail.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
        ]
    },
    {
        "id": 3,
        "firstName": "Arjun",
        "email": "arjun@gmail.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    },
    {
        "id": 4,
        "firstName": "Riya",
        "email": "riya@gmail.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    },
    {
        "id": 5,
        "firstName": "Samay",
        "email": "samay@gmail.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [

        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@me.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin }
};
