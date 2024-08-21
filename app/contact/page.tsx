export default function Contact() {
    return (
        <main className="min-h-screen">
            <div>
                <form action="">
                <label htmlFor="name">Your Name</label>
                    <input type="text" id="name"/>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email"/>
                    <label htmlFor="message">Your Message</label>
                    <input type="text" id="message" />
                   
                    <input type="Submit" value="Submit" className="p-2 border-4 rounded-xl"/>
                </form>
            </div>
        </main>
    )
}