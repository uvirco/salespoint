import React from 'react';

function Home() {
    return (
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        margin: "10px",
                        backgroundColor: "blue",
                        padding: "10px",
                        color: "white",
                    }}
                >
                    <h2>Column 1</h2>
                    <p>Some text...</p>
                </div>
                <div
                    style={{
                        flex: 1,
                        margin: "10px",
                        backgroundColor: "blue",
                        padding: "10px",
                        color: "white",
                    }}
                >
                    <h2>Column 2</h2>
                    <p>Some text...</p>
                </div>
            </div>
        </div>
    );
}

export default Home;