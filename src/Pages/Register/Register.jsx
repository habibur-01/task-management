import  { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { updateProfile } from 'firebase/auth';
// import Swal from 'sweetalert2';
// import { useForm } from 'react-hook-form';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userInfo = { name, email, password }
        console.log(userInfo)

        if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            return toast('Minimum six characters, at least one uppercase & special charecter')

        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                updateProfile(user, {
                    displayName: name,

                })

            //     fetch(' http://localhost:3000/user', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(userInfo)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log(data)
            //             if (data.insertedId) {
            //                 Swal.fire({
            //                     position: "center",
            //                     icon: "success",
            //                     title: "Registration Successfull",
            //                     showConfirmButton: false,
            //                     timer: 1500
            //                 });
            //             }
            //         })


            //     // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
                // ..
            });

    }

    return (
        <div>

            <div className='flex justify-center items-center h-[700px]'>


                <div className='w-1/2 border rounded-lg'>
                    <form className="card-body w-3/4 mx-auto" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p href="#" className="label-text-alt link link-hover">Already have an account? Please <Link to={'/login'}><span className='text-indigo-700'>Login</span></Link></p>
                        </label>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;