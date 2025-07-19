import React, { useEffect, useState } from "react";

const HooksDeepDive = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("اهلا انا لسا معمول");
  }, []);

  useEffect(() => {
    console.log(`اوك الرقم اتغير فانا بظهر تاني  ${count}`);

    if (count > 0) {
      document.title = `العداد وصل إلى ${count}`;
    } else {
      document.title = "شرح React Hooks";
    }
  }, [count]);

  return (
    <div className="p-8 border rounded-lg bg-gray-900 text-white mb-8">
      <h2 className="text-3xl font-bold mb-4">شرح عميق: `useState` و `useEffect`</h2>
      <p className="mb-6 text-gray-300">
        هذا المكون يوضح أهم Hooks في رياكت. افتح الـ Console في المتصفح لترى الرسائل التوضيحية.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">useState: حالة العداد</h3>
        <p className="text-5xl font-mono my-4">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          زيادة العداد
        </button>
        <p className="text-sm mt-4 text-gray-400">
          عند الضغط، يتم استدعاء `setCount`، مما يسبب إعادة رسم المكون وتشغيل الـ `useEffect` الذي يعتمد على `count`.
        </p>
      </div>
    </div>
  );
};
export default HooksDeepDive;
