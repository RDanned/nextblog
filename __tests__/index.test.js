import { render, screen, act } from '@testing-library/react'
import store from '../lib/store'
import axios from '../lib/api/axios';
import '@testing-library/jest-dom'
import Home from '../pages/index'
import {Provider} from "react-redux";
import fakedata from './fakedata.json';

describe('Home', () => {
  const mAxiosResponse = {
    data: fakedata,
  };
  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);

  let el = null
  beforeEach(async () => {
    await act( async () => {
        const {container} = render(
          <Provider store={store}>
            <Home />
          </Provider>
        )
        el = container
      }
    );
  })
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Renders articles previews', async () => {
    expect(el.querySelectorAll('.article-preview').length).not.toBe(0)
  })
})