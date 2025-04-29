import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function AccessibleElementsExample() {
  const [modalMessage, setModalMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [pageError, setPageError] = useState("Example error: Please select a date before proceeding.");
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <>
      <div aria-live="polite" className="sr-only" id="global-live-region">{modalMessage}</div>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to Main Content</a>

      <main id="main-content" className="p-6 space-y-8" role="document" lang="en">
        {pageError && (
          <div
            role="alert"
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{pageError}</span>
          </div>
        )}

        <h1 className="text-3xl font-bold">Accessible Web Elements Example</h1>

        {/* Decorative Image */}
        <img src="https://via.placeholder.com/150" alt="" aria-hidden="true" />

        {/* Standard Accessible Elements */}
        <section>
          <h2 className="text-2xl font-semibold">Standard Accessible Elements</h2>

          <button className="p-2 mt-2 border rounded focus:ring-2 focus:ring-blue-500">Accessible Button</button>

          <p className="mt-4">
            <a href="#" className="text-blue-600 underline focus:ring-2 focus:ring-blue-500">Accessible Link</a>
          </p>

          <fieldset className="mt-4">
            <legend className="font-semibold">Choose a Fruit:</legend>
            <label className="block">
              <input type="radio" name="fruit" value="apple" className="mr-2" /> Apple
            </label>
            <label className="block">
              <input type="radio" name="fruit" value="orange" className="mr-2" /> Orange
            </label>
          </fieldset>

          <fieldset className="mt-4">
            <legend className="font-semibold">Choose your Interests:</legend>
            <label className="block">
              <input type="checkbox" name="interest" value="coding" className="mr-2" /> Coding
            </label>
            <label className="block">
              <input type="checkbox" name="interest" value="music" className="mr-2" /> Music
            </label>
          </fieldset>

          <table className="mt-6 border w-full">
            <caption className="text-left font-semibold mb-2">Sample Data Table</caption>
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="border p-2">Name</th>
                <th scope="col" className="border p-2">Age</th>
                <th scope="col" className="border p-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">John Doe</td>
                <td className="border p-2">30</td>
                <td className="border p-2">New York</td>
              </tr>
              <tr>
                <td className="border p-2">Jane Smith</td>
                <td className="border p-2">25</td>
                <td className="border p-2">Los Angeles</td>
              </tr>
            </tbody>
          </table>

          <label htmlFor="country" className="block mt-4 font-medium">Select a Country:</label>
          <select id="country" name="country" className="border p-2 mt-1 w-full focus:ring-2 focus:ring-blue-500">
            <option value="">--Please choose an option--</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
          </select>
        </section>

        {/* Accessible Tabs */}
        <section>
          <h2 className="text-2xl font-semibold">Accessible Tabs</h2>
          <div role="tablist" aria-label="Sample Tabs" className="flex space-x-4">
            {tabs.map((tab, index) => (
              <button
                key={`tab-${index}`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={`p-2 border-b-2 ${activeTab === index ? 'border-blue-500' : 'border-transparent'} focus:ring-2 focus:ring-blue-500`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          {tabs.map((tab, index) => (
            <div
              key={`tabpanel-${index}`}
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={activeTab !== index}
              className="mt-4"
            >
              <p>{`Content for ${tab}`}</p>
            </div>
          ))}
        </section>

        {/* Accessible Date Picker */}
        <section aria-labelledby="datepicker-label">
          <h2 id="datepicker-label" className="text-2xl font-semibold">Accessible Date Picker</h2>
          <div className="border rounded p-4 max-w-md">
            <label htmlFor="datepicker" className="block text-lg font-medium mb-2">Select a date:</label>
            <DayPicker
              id="datepicker"
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                if (date) setPageError("");
              }}
              captionLayout="dropdown"
              fromYear={1900}
              toYear={2100}
            />
            <p className="mt-2 text-sm text-gray-600">
              Use the arrow keys to navigate days. Use Page Up/Down to change months, and Home/End to move weeks.
            </p>
          </div>
        </section>

        {/* Color Contrast */}
        <section>
          <h2 className="text-2xl font-semibold">Color Contrast Examples</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <div className="bg-gray-700 text-white p-4 rounded">
              <p>Good Contrast (4.5:1 and above) - Example Text</p>
            </div>
            <div className="bg-gray-300 text-gray-500 p-4 rounded">
              <p>Poor Contrast (less than 4.5:1) - Example Text</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
